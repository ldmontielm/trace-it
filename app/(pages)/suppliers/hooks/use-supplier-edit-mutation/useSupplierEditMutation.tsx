"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { EditSupplierAction } from '../../actions'

export default function useSupplierEditMutation() {
    const { toast } = useToast()
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: EditSupplierAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["suppliers"],
                refetchType: "active"
            })
            queryClient.invalidateQueries({
                queryKey: [data.id]
            })
            toast("✅ ¡Proveedor actualizado!", {
                description: `✅ El proveedor fue actualizado correctamente sin inconvenientes.`,
            })
            router.push('/suppliers')
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de actualizar al proveedor`,
            })
        }
    })
    return mutation
}
