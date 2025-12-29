import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@Api/axios";


export const useFetchUserData = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchData,
        staleTime: 10000,
    })
}