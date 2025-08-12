"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CryptoCurrency } from "@/types/crypto"
import { formatPrice, formatPercentage, formatMarketCap, getUSDQuote } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import {ArrowUpIcon, ArrowDownIcon, Bitcoin} from "lucide-react"

export const columns: ColumnDef<CryptoCurrency>[] = [
    {
        accessorKey: "cmcRank",
        header: "Rank",
        cell: ({ row }) => (
            <div className="w-[60px] font-medium">
                #{row.getValue("cmcRank")}
            </div>
        ),
    },
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row }) => {
            const name = row.getValue("name") as string
            const symbol = row.original.symbol

            return (
                <div className="flex items-center space-x-3 ">
                    {/* Crypto logo would go here */}
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center" >
                        <Bitcoin className="text-gray-400"/>
                    </div>
                    <div>
                        <div className="font-medium">{name}</div>
                        <div className="text-sm text-muted-foreground">{symbol}</div>
                    </div>
                </div>
            )
        },
    },
    {
        accessorKey: "price",
        header: "Price",
        cell: ({ row }) => {
            const quote = getUSDQuote(row.original)
            return quote ? formatPrice(quote.price) : "N/A"
        },
    },
    {
        accessorKey: "percentChange24h",
        header: "24h %",
        cell: ({ row }) => {
            const quote = getUSDQuote(row.original)
            if (!quote) return "N/A"

            const change = quote.percentChange24h
            const isPositive = change > 0

            return (
                <div className={`flex items-center space-x-1 ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                    {isPositive ? <ArrowUpIcon className="h-3 w-3" /> : <ArrowDownIcon className="h-3 w-3" />}
                    <span>{formatPercentage(Math.abs(change))}</span>
                </div>
            )
        },
    },
    {
        accessorKey: "percentChange7d",
        header: "7d %",
        cell: ({ row }) => {
            const quote = getUSDQuote(row.original)
            if (!quote) return "N/A"

            const change = quote.percentChange7d
            const isPositive = change > 0

            return (
                <Badge className={isPositive ?'bg-green-600' : 'bg-red-600'}>
                    {formatPercentage(change)}
                </Badge>
            )
        },
    },
    {
        accessorKey: "marketCap",
        header: "Market Cap",
        cell: ({ row }) => {
            const quote = getUSDQuote(row.original)
            return quote ? formatMarketCap(quote.marketCap) : "N/A"
        },
    },
    {
        accessorKey: "volume24h",
        header: "Volume (24h)",
        cell: ({ row }) => {
            const quote = getUSDQuote(row.original)
            return quote ? formatMarketCap(quote.volume24h) : "N/A"
        },
    },
    {
        accessorKey: "circulatingSupply",
        header: "Circulating Supply",
        cell: ({ row }) => {
            const supply = row.getValue("circulatingSupply") as number
            const symbol = row.original.symbol

            return (
                <div>
                    <div>{supply.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">{symbol}</div>
                </div>
            )
        },
    },
]