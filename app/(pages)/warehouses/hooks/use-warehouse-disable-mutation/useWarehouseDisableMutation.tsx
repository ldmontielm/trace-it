"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { DisableWarehouseAction } from '../../actions'


export default function useWarehouseDisableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: DisableWarehouseAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["warehouses"],
                refetchType: "active"
            })
            toast("✅ ¡Almacén Inhabilitado!", {
                description: `✅ El almacén fue inhabilitado correctamente sin inconvenientes.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de inhabilitar el almacén`,
            })
        }
    })
    return mutation
}
