import { useMutation, useQueryClient } from '@tanstack/react-query';
import { UserData } from '@Types/index';
import { createUser, deleteUser } from '@Api/axios';

// create new user mutation hook
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser: UserData) => {
      queryClient.setQueryData<UserData[]>(['users'], oldUser => {
        return oldUser ? [newUser, ...oldUser] : [newUser];
      });
    },
  });
};

// delete user
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (userId: number) => deleteUser(userId),
    onSuccess: (_data, userId) => {
      queryClient.setQueryData(['users'], (users: any) => {
        return users?.filter((user: any) => user.id !== userId);
      });
    },
  });
};
