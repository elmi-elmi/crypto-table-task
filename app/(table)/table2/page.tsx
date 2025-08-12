import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { DataTable } from "@/components/crypto-table/DataTable";
import { apiService } from "@/services/api";

const Page = async () => {
  const currentPage = 1;
  const now = Date.now();
  const start = (currentPage - 1) * 10 + 1;

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["cryptos", currentPage],
    queryFn: async () => {
      const data = await apiService.fetchCryptos(start, 10);
      return data.data.cryptoCurrencyList;
    },
    staleTime: 2 * 60 * 1000,
  });

  await queryClient.prefetchQuery({
    queryKey: ["metadata"],
    queryFn: async () => {
      const data = await apiService.fetchCryptos(start, 10);
      return { lastUpdate: now, totalCount: +data.data.totalCount };
    },
    staleTime: 2 * 60 * 1000,
  });

  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <DataTable />
    </HydrationBoundary>
  );
};

export default Page;
