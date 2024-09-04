"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { AvailableProductAction } from '../../actions'

export default function useProductAvailableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: AvailableProductAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                refetchType: "active"
            })
            toast("✅ ¡Campo Inhabilitado!", {
                description: `✅ El producto fue habilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de habilitar el producto.`,
            })
        }
    })
    return mutation
}
