"use client"


import {ReactNode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


const queryClient = new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 5 * 60 * 1000,
            gcTime: 10 * 60 * 1000,
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            retry:1

        },
        mutations: {
            retry: 1,
            retryDelay: 10000,
        },
    }
})

const Providers = ({children}:{children:ReactNode})=>{

    return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export default Providers;