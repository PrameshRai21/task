import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserData } from "@Types/index";
import { createUser } from "@Api/axios";

//create new user mutation hook
export const useCreateUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: createUser,
        onSuccess: (newUser : UserData) => {
            queryClient.setQueryData<UserData[]>(['users'], (oldUser) => {
                return oldUser ? [newUser, ...oldUser] : [newUser]
            })
        }
    })
}
