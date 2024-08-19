import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllInventories } from '../../services'

export default function useInventories() {
    const queryInventories = useQuery({
        queryKey: ['inventories'],
        queryFn: GetAllInventories
    })
    return {
        data: queryInventories.data!,
        isLoading: queryInventories.isLoading,
        error: queryInventories.error,
        isError: queryInventories.isError
    }
}
