
export const API_CONFIG = {
    BASE_URL: 'https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing',
    DEFAULT_PARAMS: {
        sortBy: 'rank',
        sortType: 'desc',
        convert: 'USD,BTC,ETH',
        cryptoType: 'all',
        tagType: 'all',
        audited: false,
        aux: 'ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap'
    }
} as const;

export const PAGINATION_CONFIG = {
    INITIAL_LOAD: 10,
    LOAD_MORE_SIZE: 50,
    MAX_ITEMS: 5000
} as const;

export const CACHE_CONFIG = {
    DATABASE_NAME: 'CryptoApp',
    DATABASE_VERSION: 1,
    STORE_NAME: 'cryptocurrencies',
    CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
    UPDATE_INTERVAL: 2 * 60 * 1000, // 2 minutes
} as const;

export const UI_CONFIG = {
    MOBILE_BREAKPOINT: 768,
    SKELETON_ROWS: 10,
    DEBOUNCE_DELAY: 300,
    ANIMATION_DURATION: 200,
} as const;

export const TABLE_COLUMNS = [
    {
        key: 'cmcRank',
        title: '#',
        sortable: true,
        width: '60px',
        align: 'center' as const
    },
    {
        key: 'name',
        title: 'Name',
        sortable: true,
        width: '200px',
        align: 'left' as const
    },
    {
        key: 'price',
        title: 'Price',
        sortable: true,
        width: '120px',
        align: 'right' as const
    },
    {
        key: 'percentChange24h',
        title: '24h %',
        sortable: true,
        width: '100px',
        align: 'right' as const
    },
    {
        key: 'percentChange7d',
        title: '7d %',
        sortable: true,
        width: '100px',
        align: 'right' as const
    },
    {
        key: 'marketCap',
        title: 'Market Cap',
        sortable: true,
        width: '140px',
        align: 'right' as const
    },
    {
        key: 'volume24h',
        title: 'Volume (24h)',
        sortable: true,
        width: '140px',
        align: 'right' as const
    },
    {
        key: 'circulatingSupply',
        title: 'Circulating Supply',
        sortable: false,
        width: '160px',
        align: 'right' as const
    }
] as const;

export const SORT_OPTIONS = [
    { value: 'rank', label: 'Rank' },
    { value: 'name', label: 'Name' },
    { value: 'price', label: 'Price' },
    { value: 'marketCap', label: 'Market Cap' },
    { value: 'volume24h', label: '24h Volume' },
    { value: 'percentChange24h', label: '24h Change' },
] as const;

export const CURRENCY_OPTIONS = [
    { value: 'USD', label: 'USD', symbol: '$' },
    { value: 'BTC', label: 'BTC', symbol: '₿' },
    { value: 'ETH', label: 'ETH', symbol: 'Ξ' },
] as const;

export const QUERY_KEYS = {
    CRYPTOCURRENCIES: 'cryptocurrencies',
    CRYPTO_DETAILS: 'crypto-details',
    MARKET_DATA: 'market-data',
} as const;

export const LOCAL_STORAGE_KEYS = {
    THEME: 'crypto-app-theme',
    CURRENCY: 'crypto-app-currency',
    TABLE_SETTINGS: 'crypto-app-table-settings',
    USER_PREFERENCES: 'crypto-app-preferences',
} as const;

export const ERROR_MESSAGES = {
    NETWORK_ERROR: 'Network error occurred. Please check your connection.',
    API_ERROR: 'Unable to fetch data from server.',
    CACHE_ERROR: 'Error accessing local storage.',
    GENERIC_ERROR: 'Something went wrong. Please try again.',
} as const;

export const SUCCESS_MESSAGES = {
    DATA_UPDATED: 'Data updated successfully',
    PREFERENCES_SAVED: 'Preferences saved',
} as const;