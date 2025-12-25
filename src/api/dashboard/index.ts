import { useMutation, useQuery } from '@tanstack/react-query';
import { createPost, getAwards, getServices } from '@Services/dashboard';
import { TQueryOptions, TMutationOptions } from '@Types/index';
import { IAwardsData, IPostsPayload } from './types';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
const URL = import.meta.env.VITE_WEATHER_URL;

//function fetching weather api 
export const getWeatherApi = (city: string) => {
  return axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY
    }
  })
} 

// function fetching users data
export const userDataApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers : {
    'Content-Type': 'application/json'
  }
})

export const useGetServicesQuery = () => {
  return useQuery({
    queryKey: ['get-services'],
    queryFn: async () => {
      const response = await getServices();
      return response.data;
    },
  });
};

export const useGetAwardsQuery = (
  queryOptions?: TQueryOptions<IAwardsData[]>,
) => {
  return useQuery({
    queryKey: ['get-awards'],
    queryFn: async () => {
      const response = await getAwards();
      return response.data;
    },
    ...queryOptions,
  });
};

export const useCreatePostMutation = (
  mutationOptions?: TMutationOptions<Record<string, any>, IPostsPayload>,
) => {
  return useMutation({
    mutationFn: createPost,
    ...mutationOptions,
  });
};
