'use client';

import { openDB, DBSchema, IDBPDatabase } from 'idb';
import {ApiResponse, CryptoCurrency} from '@/types/crypto';

interface CryptoDBSchema extends DBSchema {
    cryptos: {
        key: number;
        value: CryptoCurrency & { cachedAt: number };
        indexes: { 'by-rank': number };
    };
    metadata: {
        key: string;
        value: { lastUpdated: number; totalCount: number };
    };
}

class IDBService {
    private db: Promise<IDBPDatabase<CryptoDBSchema>> | null = null;

    private initDB() {
        if (typeof window === 'undefined') {
            return null;
        }

        if (!this.db) {
            this.db = openDB<CryptoDBSchema>('CryptoDB', 1, {
                upgrade(db) {
                    const cryptoStore = db.createObjectStore('cryptos', { keyPath: 'id' });
                    cryptoStore.createIndex('by-rank', 'cmcRank');
                    db.createObjectStore('metadata');
                },
            });
        }

        return this.db;
    }

    async getCryptos(start = 1, limit = 10): Promise<CryptoCurrency[]> {

        const db = this.initDB();
        if (!db) return [];

        const dbInstance = await db;
        const tx = dbInstance.transaction('cryptos', 'readonly');
        const index = tx.store.index('by-rank');

        const cryptos = await index.getAll(IDBKeyRange.bound(start, start + limit - 1), limit);

        return cryptos.map(({ cachedAt, ...crypto }) => crypto);

    }

    async setCryptos(cryptos: ApiResponse): Promise<void> {
        console.log('set setCryptos start', cryptos.data.cryptoCurrencyList.length)
        const db = this.initDB();
        if (!db) return;

        const dbInstance = await db;
        const tx = dbInstance.transaction(['cryptos', 'metadata'], 'readwrite');

        const cryptoStore = tx.objectStore('cryptos');
        const metadataStore = tx.objectStore('metadata');

        const now = Date.now();

        await Promise.all(
            cryptos.data.cryptoCurrencyList.map(c => cryptoStore.put({ ...c, cachedAt: now }))
        );


        await metadataStore.put( {
            lastUpdated: now,
            totalCount: +cryptos.data.totalCount,
        },'cache-info',);

        await tx.done;


    }

    async getMetadata(): Promise<{ lastUpdated: number; totalCount: number } | null> {
        console.log('getMetadata start')

        const db = this.initDB();
        if (!db) return null;

        const dbInstance = await db;
        return await dbInstance.get('metadata', 'cache-info') || null;
    }

}

export const idbService = new IDBService();