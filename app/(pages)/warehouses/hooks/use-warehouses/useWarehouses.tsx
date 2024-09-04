"use client"

import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { GetAllWarehousesAction } from '../../services'

export default function useWarehouses() {
  const queryWarehouse = useQuery({
    queryKey: ['warehouses'],
    queryFn: GetAllWarehousesAction
  })
  return {
    data: queryWarehouse.data!,
    isLoading: queryWarehouse.isLoading,
    error: queryWarehouse.error,
    isError: queryWarehouse.isError
}
}
