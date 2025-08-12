import { z } from 'zod';

export const QuoteSchema = z.object({
    name: z.string(),
    price: z.number(),
    volume24h: z.number(),
    volume7d: z.number(),
    volume30d: z.number(),
    marketCap: z.number(),
    selfReportedMarketCap: z.number(),
    percentChange1h: z.number(),
    percentChange24h: z.number(),
    percentChange7d: z.number(),
    percentChange30d: z.number(),
    percentChange60d: z.number(),
    percentChange90d: z.number(),
    lastUpdated: z.string(),
    fullyDilluttedMarketCap: z.number(),
    marketCapByTotalSupply: z.number(),
    dominance: z.number(),
    turnover: z.number().optional().nullable(),
    ytdPriceChangePercentage: z.number(),
    percentChange1y: z.number(),
});

export const CryptoCurrencySchema = z.object({
    id: z.number(),
    name: z.string(),
    symbol: z.string(),
    slug: z.string(),
    cmcRank: z.number(),
    marketPairCount: z.number(),
    circulatingSupply: z.number(),
    selfReportedCirculatingSupply: z.number(),
    totalSupply: z.number(),
    maxSupply: z.number().nullable().optional(),
    ath: z.number(),
    atl: z.number(),
    high24h: z.number(),
    low24h: z.number(),
    isActive: z.number(),
    lastUpdated: z.string(),
    dateAdded: z.string(),
    quotes: z.array(QuoteSchema),
    isAudited: z.boolean().optional(),
    auditInfoList: z.array(z.unknown()).optional(),
    badges: z.array(z.unknown()).optional(),
});

export const StatusSchema = z.object({
    timestamp: z.string(),
    error_code: z.string(),
    error_message: z.string(),
    elapsed: z.string(),
    credit_count: z.number(),
});

export const ApiResponseSchema = z.object({
    data: z.object({
        cryptoCurrencyList: z.array(CryptoCurrencySchema),
        totalCount: z.string(),
    }),
    status: StatusSchema,
});

export type Quote = z.infer<typeof QuoteSchema>;
export type CryptoCurrency = z.infer<typeof CryptoCurrencySchema>;
export type Status = z.infer<typeof StatusSchema>;
export type ApiResponse = z.infer<typeof ApiResponseSchema>;
