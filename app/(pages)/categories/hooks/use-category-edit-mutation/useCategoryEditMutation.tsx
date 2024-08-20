"use client"

import React from 'react'
import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { EditCategoryAction } from '../../actions'

export default function useCategoryEditMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: EditCategoryAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
                refetchType: "active"
            })
            toast("✅ ¡¡Categoría Editada!", {
                description: `✅ La categoría fue editada  correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de editar la categoría.`,
            })
        }
    })
    return mutation
}
