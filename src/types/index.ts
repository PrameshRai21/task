import type { AxiosResponse } from 'axios';
import type {
  QueryKey,
  UseMutationOptions,
  UseQueryOptions,
} from '@tanstack/react-query';

// Generic type for query options
export type TQueryOptions<
  TData,
  TError = Error,
  TQueryKey extends QueryKey = QueryKey,
> = UseQueryOptions<TData, TError, TData, TQueryKey>;

// Generic type for mutation options
export type TMutationOptions<TData, TVariables, TError = Error> = Omit<
  UseMutationOptions<AxiosResponse<TData>, TError, TVariables>,
  'mutationFn'
>;

//users api types 
export type GeoType = {
    lat: number,
    lon: number
}

export type AddressType = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: GeoType
}

export type CompanyType = {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface UserData{
    id: number,
    name: string,
    username: string,
    email: string,
    address: AddressType,
    phone: string,
    website: string,
    company: CompanyType
}