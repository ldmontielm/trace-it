"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { SendDataAction } from '../../actions'
import { useRouter } from 'next/navigation'

export default function useProductsMutation() {
    const { toast } = useToast()
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: SendDataAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["products"],
                refetchType: "active"
            })
            toast("✅ ¡Campo creado!", {
                description: `✅ El producto fue creado correctamente sin inconvenientes.`,
            })
            router.push('/inventory/products')
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de crear el campo`,
            })
        }
    })
    return mutation
}
