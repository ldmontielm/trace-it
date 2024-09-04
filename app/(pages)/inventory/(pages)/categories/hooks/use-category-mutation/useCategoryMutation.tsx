"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { CreateCategoryAction } from '../../actions'

export default function useCategoryMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: CreateCategoryAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["categories"],
                refetchType: "active"
            })
            toast("✅ Categoría creado!", {
                description: `✅ La Categoría fue creada correctamente sin inconvenientes.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de crear la categoría`,
            })
        }
    })
    return mutation
}