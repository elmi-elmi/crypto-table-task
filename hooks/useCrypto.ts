"use client"

import { apiService } from '@/services/api';
import { idbService } from '@/services/idb';
import { CryptoCurrency } from '@/types/crypto';
import { useQuery } from '@tanstack/react-query';


const CACHE_DURATION = 5 * 60 * 1000;

export const useCryptoList = (page:number =1) => {
    return useQuery<CryptoCurrency[]>({
        queryKey: ['cryptos', page],
        queryFn: async () => {
            const start = (page - 1) * 10 + 1;
            const limit = 10;
            const metadata = await idbService.getMetadata();
            const now = Date.now();

            if (metadata && (now - metadata.lastUpdated) < CACHE_DURATION) {
                const cachedData = await idbService.getCryptos(start, limit);
                if (cachedData.length > 0) {
                    return cachedData;
                }
            }
            const apiData = await apiService.fetchCryptos(start, limit);
            await idbService.setCryptos(apiData);


            return apiData.data.cryptoCurrencyList;
        },
        staleTime: CACHE_DURATION,
        refetchInterval: CACHE_DURATION,
        refetchOnWindowFocus: false,
    });
};

export function useCryptoMetadata() {

    const  data = useCryptoList()
    return useQuery({
        queryKey: ['metadata'],
        queryFn: () => idbService.getMetadata(),
        staleTime: Infinity,
        enabled: data.status === 'success',
    });
}