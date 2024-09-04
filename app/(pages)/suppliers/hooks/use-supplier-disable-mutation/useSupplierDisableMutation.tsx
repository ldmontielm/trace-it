"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { DisableSupplierAction } from '../../actions'

export default function useSupplierDisableMutation() {
    const { toast } = useToast()

    const mutation = useMutation({
        mutationFn: DisableSupplierAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["suppliers"],
                refetchType: "active"
            })
            toast("✅ ¡Proveedor Inhabilitado!", {
                description: `✅ El proveedor fue inhabilitado correctamente.`,
            })
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de inhabilitar al proveedor.`,
            })
        }
    })
    return mutation
}
