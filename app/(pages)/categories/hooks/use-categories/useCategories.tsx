"use client"

import { useQuery } from '@tanstack/react-query'
import { GetAllCategories } from '@/app/(pages)/products/services'

export default function useCategories() {
    const queryCategories = useQuery({
        queryKey: ['categories'],
        queryFn: GetAllCategories
    })
    return {
        data: queryCategories.data!,
        isLoading: queryCategories.isLoading,
        error: queryCategories.error,
        isError: queryCategories.isError
    }
}
