export const API_CONFIG = {
  BASE_URL: "https://api.coinmarketcap.com/data-api/v3/cryptocurrency/listing",
  DEFAULT_PARAMS: {
    sortBy: "rank",
    sortType: "desc",
    convert: "USD,BTC,ETH",
    cryptoType: "all",
    tagType: "all",
    audited: false,
    aux: "ath,atl,high24h,low24h,num_market_pairs,cmc_rank,date_added,max_supply,circulating_supply,total_supply,volume_7d,volume_30d,self_reported_circulating_supply,self_reported_market_cap",
  },
} as const;

export const PAGINATION_CONFIG = {
  INITIAL_LOAD: 10,
  LOAD_MORE_SIZE: 50,
  MAX_ITEMS: 5000,
} as const;

export const CACHE_CONFIG = {
  DATABASE_NAME: "CryptoApp",
  DATABASE_VERSION: 1,
  STORE_NAME: "cryptocurrencies",
  CACHE_DURATION: 5 * 60 * 1000, // 5 minutes
  UPDATE_INTERVAL: 2 * 60 * 1000, // 2 minutes
} as const;
