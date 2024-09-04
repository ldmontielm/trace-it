"use client"

import { useQuery } from '@tanstack/react-query';
import { GetAllSuppliers } from '../../services';

export default function useSuppliers() {
    const querySuppliers = useQuery({
        queryKey: ['suppliers'], 
        queryFn: GetAllSuppliers
    })
    return {
        data: querySuppliers.data!,
        isLoading: querySuppliers.isLoading,
        error: querySuppliers.error,
        isError: querySuppliers.isError
    }
}
