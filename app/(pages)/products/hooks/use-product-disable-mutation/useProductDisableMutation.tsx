"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { SendDataAction, DisableProductAction } from '../../actions'

export default function useProductDisableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: DisableProductAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                refetchType: "active"
            })
            toast("✅ ¡Campo Inhabilitado!", {
                description: `✅ El producto fue inhabilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de inhabilitar el producto.`,
            })
        }
    })
    return mutation
}
