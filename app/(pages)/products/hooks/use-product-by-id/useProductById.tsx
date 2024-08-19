"use client"

import { useQuery } from '@tanstack/react-query';
import { GetProductById } from '../../services';

export default function useProductById(id: string) {
    const queryProducts = useQuery({
        queryKey: [id], 
        queryFn: ({ queryKey }) => GetProductById(queryKey[0]),
    })
    return {
        data: queryProducts.data!,
        isLoading: queryProducts.isLoading,
        error: queryProducts.error,
        isError: queryProducts.isError
    }
}
