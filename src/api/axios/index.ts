import { UserData } from "@Types/index";
import { userDataApi } from "@Api/dashboard";

//fetch data 
export const fetchData = async () : Promise<UserData[]> => {
    const response = await userDataApi.get<UserData[]>('/users');
    return response.data;
}

//add new user
export const createUser = async (user: UserData) => {
    const response = await userDataApi.post('/users', user)
    return response.data;
}

//delete user
export const deleteUser = async (id: number) => {
    await userDataApi.delete(`/users/${id}`)
}



