
export interface CryptoCurrency {
    id: number;
    name: string;
    symbol: string;
    slug: string;
    cmcRank: number;
    marketPairCount: number;
    circulatingSupply: number;
    totalSupply: number;
    maxSupply: number | null;
    ath: number;
    atl: number;
    high24h: number;
    low24h: number;
    isActive: number;
    isAudited: boolean;
    dateAdded: string;
    quotes: {
        [key: string]: {
            price: number;
            volume24h: number;
            volume7d: number;
            volume30d: number;
            marketCap: number;
            marketCapByTotalSupply: number;
            percentChange1h: number;
            percentChange24h: number;
            percentChange7d: number;
            percentChange30d: number;
            percentChange60d: number;
            percentChange90d: number;
            fullyDilluttedMarketCap: number;
            marketCapByTotalSupplyYesterday: number;
            volume24hYesterday: number;
            dominance: number;
            turnover: number;
            ytdPriceChangePercentage: number;
            lastUpdated: string;
        };
    };
}

export interface ApiResponse {
    data: {
        cryptoCurrencyList: CryptoCurrency[];
        totalCount: number;
    };
    status: {
        timestamp: string;
        errorCode: string;
        errorMessage: string | null;
        elapsed: string;
        creditCount: number;
    };
}

export interface PaginationState {
    page: number;
    limit: number;
    total: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface CryptoFilters {
    search: string;
    sortBy: 'rank' | 'name' | 'price' | 'marketCap' | 'volume24h' | 'percentChange24h';
    sortOrder: 'asc' | 'desc';
    convert: 'USD' | 'BTC' | 'ETH';
}

export interface CacheEntry {
    data: CryptoCurrency[];
    timestamp: number;
    page: number;
    limit: number;
}

export interface CryptoStore {
    // Data
    cryptos: CryptoCurrency[];
    loading: boolean;
    error: string | null;

    // Pagination
    pagination: PaginationState;

    // Filters
    filters: CryptoFilters;

    // Actions
    setCryptos: (cryptos: CryptoCurrency[]) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setPagination: (pagination: Partial<PaginationState>) => void;
    setFilters: (filters: Partial<CryptoFilters>) => void;
    resetFilters: () => void;
}

export interface UIStore {
    // Theme
    isDarkMode: boolean;

    // Layout
    isMobile: boolean;
    sidebarOpen: boolean;

    // Loading states
    isInitialLoading: boolean;
    isLoadingMore: boolean;

    // Actions
    toggleDarkMode: () => void;
    setIsMobile: (isMobile: boolean) => void;
    setSidebarOpen: (open: boolean) => void;
    setInitialLoading: (loading: boolean) => void;
    setLoadingMore: (loading: boolean) => void;
}

export type SortDirection = 'asc' | 'desc' | false;

export interface TableColumn {
    key: string;
    title: string;
    sortable: boolean;
    width?: string;
    align?: 'left' | 'center' | 'right';
}