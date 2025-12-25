import { userDataApi } from "@Api/dashboard";
import { UserData } from "@Types/index";
import { useQuery } from "@tanstack/react-query";

const fetchData = async () : Promise<UserData[]> => {
    const response = await userDataApi.get<UserData[]>('/users');
    return response.data;
}

export const useFetchUserData = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchData,
        staleTime: 10000,
    })
}

