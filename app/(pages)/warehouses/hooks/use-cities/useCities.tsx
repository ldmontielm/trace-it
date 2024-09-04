"use client"

import { useQuery } from "@tanstack/react-query"
import { GetCitiesByDepartmentsService } from "../../services"

export default function useCities(department: string | undefined) {
    const queryCity = useQuery({
        queryKey: ['city', department],
        queryFn: () => GetCitiesByDepartmentsService(department!),
    })


    return {
        data: queryCity.data!,
        isLoading: queryCity.isLoading,
        error: queryCity.error,
        isError: queryCity.isError
    }
}
