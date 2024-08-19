"use client"
import React from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export const queryClient = new QueryClient()

interface Props {
    children: React.ReactNode
}

export default function ReactQueryProvider({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      { children }
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}
