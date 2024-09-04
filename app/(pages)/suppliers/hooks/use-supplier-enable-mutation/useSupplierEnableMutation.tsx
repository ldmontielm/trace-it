"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { EnableSupplierAction } from '../../actions'

export default function useSupplierEnableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: EnableSupplierAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["suppliers"],
                refetchType: "active"
            })
            toast("✅ ¡Proveedor Habilitado!", {
                description: `✅ El proveedor fue habilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de habilitar al proveedor.`,
            })
        }
    })
    return mutation
}
