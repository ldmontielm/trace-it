"use client"

import { useQuery } from '@tanstack/react-query';
import { GetSupplierById } from '../../services';

export default function useSupplierById(id: string) {
    const querySuppliers = useQuery({
        queryKey: [id], 
        queryFn: ({ queryKey }) => GetSupplierById(queryKey[0]),
    })
    return {
        data: querySuppliers.data!,
        isLoading: querySuppliers.isLoading,
        error: querySuppliers.error,
        isError: querySuppliers.isError
    }
}
