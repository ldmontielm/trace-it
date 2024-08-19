"use client"

import { useQuery } from '@tanstack/react-query';
import { GetAllProducts } from '../../services';

export default function useProducts() {
    const queryProducts = useQuery({
        queryKey: ['products'], 
        queryFn: GetAllProducts
    })
    return {
        data: queryProducts.data!,
        isLoading: queryProducts.isLoading,
        error: queryProducts.error,
        isError: queryProducts.isError
    }
}
