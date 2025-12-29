import { fetchData } from "@Api/axios";
import { useQuery } from "@tanstack/react-query";

export const useFetchUserData = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchData,
        staleTime: 10000,
    })}

