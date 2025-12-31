import { getChartApi } from "@Api/dashboard";
import { useQuery } from "@tanstack/react-query";

export const useFetchChartApi = () => {
    return useQuery({
        queryKey: ['charts'],
        queryFn: getChartApi,
        staleTime: 10000,
    })
}
