"use client"


import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000, // 10 minutes (previously cacheTime)
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry: (failureCount, error) => {
                // Don't retry on 4xx errors
                if ( 'status' in error) {
                    const status = error.status
                    if (typeof status === 'number') {
                        if (status >= 400 && status < 500) return false
                    }

                }

                // Retry up to 3 times with exponential backoff
                return failureCount < 3
            },
            retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
        },
        mutations: {
            retry: 1,
            retryDelay: 1000,
        },
    }
})

const Providers = ({children}:{children:ReactNode})=>{


    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers;