"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { SetQuantityAction } from '../../actions'

export default function useSetQuantityInventory() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: SetQuantityAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["inventories"],
                refetchType: "active"
            })
            toast("✅ ¡Cantidad Establecida!", {
                description: `✅ La cantidad fue establecida correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("sds",{
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de establecer la cantidad.`,
            })
        }
    })
    return mutation
}
