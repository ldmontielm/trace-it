import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllMovements } from '../../services'

export default function useMovements() {
    const queryMovements = useQuery({
        queryKey: ['movements'],
        queryFn: GetAllMovements
    })
    return {
        data: queryMovements.data!,
        isLoading: queryMovements.isLoading,
        error: queryMovements.error,
        isError: queryMovements.isError
    }
}
