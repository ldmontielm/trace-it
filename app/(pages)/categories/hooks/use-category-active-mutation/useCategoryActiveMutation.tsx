"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { EnableCategoryAction } from '../../actions'

export default function useProductAvailableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: EnableCategoryAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
                refetchType: "active"
            })
            toast("✅ ¡Categoría Inhabilitado!", {
                description: `✅ La categoría fue habilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de habilitar la categoría.`,
            })
        }
    })
    return mutation
}
