"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { DisableCategoryAction } from '../../actions'

export default function useProductDisableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: DisableCategoryAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
                refetchType: "active"
            })
            toast("✅ ¡¡Categoría Inhabilitado!", {
                description: `✅ La categoría fue inhabilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de inhabilitar la categoría.`,
            })
        }
    })
    return mutation
}
