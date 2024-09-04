"use client"

import { useQuery } from "@tanstack/react-query"
import { GetDepartmentsService } from "../../services"

export default function useDepartments() {
    const queryDepartments = useQuery({
        queryKey: ['departments'],
        queryFn: GetDepartmentsService
      })
      return {
        data: queryDepartments.data!,
        isLoading: queryDepartments.isLoading,
        error: queryDepartments.error,
        isError: queryDepartments.isError
    }
}
