"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { CreateWarehouseAction } from '../../actions'

export default function useWarehousesMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: CreateWarehouseAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"],
                refetchType: "active"
            })
            toast("✅ ¡Almacén creado!", {
                description: `✅ El almacén fue creado correctamente sin inconvenientes.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de crear el almacén`,
            })
        }
    })
    return mutation
}
