
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { UserData } from "@Types/index";
import { createUser, deleteUser, updateUser } from "@Api/axios";

type UpdateUserData = {
  id: number;
  data: UserData;
};

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

//edit user
export const useUpdateUser = () => {
  const queryClient = useQueryClient();
  return useMutation<UserData, Error, UpdateUserData>({
    mutationFn: ({ id, data }) => updateUser(id, data),
    onSuccess: (updatedUser) => {
      // Update cache so UI updates immediately
      queryClient.setQueryData<UserData[]>(["users"], (users) =>
        users?.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        )
      );
    },
  });
};

// delete user
export const useDeleteUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn:(userId: number) => deleteUser(userId),
    onSuccess: (_data, userId) => {
       queryClient.setQueryData(['users'], (users:any) => {
        return users?.filter((user: any) => user.id !== userId) 
      })
    }
  })
}
