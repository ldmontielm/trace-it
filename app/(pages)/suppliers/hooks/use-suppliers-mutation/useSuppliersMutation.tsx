"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { CreateSupplierAction } from '../../actions'
import { useRouter } from 'next/navigation'

export default function useSuppliersMutation() {
    const { toast } = useToast()
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: CreateSupplierAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["suppliers"],
                refetchType: "active"
            })
            toast("✅ ¡Proveedor creado!", {
                description: `✅ El proveedor fue creado correctamente sin inconvenientes.`,
            })
            router.push('/suppliers')
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de crear al proveedor`,
            })
        }
    })
    return mutation
}
