"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { EnableWarehouseAction } from '../../actions'


export default function useWarehouseEnableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: EnableWarehouseAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"],
                refetchType: "active"
            })
            toast("✅ ¡Almacén Habilitado!", {
                description: `✅ El almacén fue habilitado correctamente sin inconvenientes.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de habilitar el almacén`,
            })
        }
    })
    return mutation
}
