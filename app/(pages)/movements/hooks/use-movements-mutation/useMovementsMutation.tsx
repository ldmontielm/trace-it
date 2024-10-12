"use client"

import { useMutation } from '@tanstack/react-query'
import { queryClient } from '@/context/react-query-provider/ReactQueryProvider'
import { useToast } from '@/components/ui/use-toast'
import { CreateMovementAction } from '../../actions'
import { useRouter } from 'next/navigation'

export default function useMovementsMutation() {
    const { toast } = useToast()
    const router = useRouter()

    const mutation = useMutation({
        mutationFn: CreateMovementAction,
        onSuccess: (data) => {
            queryClient.invalidateQueries({
                queryKey: ["movements"],
                refetchType: "active"
            })
            toast("✅ ¡Movimiento creado!", {
                description: `✅ El movimiento fue creado correctamente sin inconvenientes.`,
            })
            router.push('/movements')
        },
        onError: (error, variables) => {
            toast("❌ Ha ocurrido un error", {
                title: "Ha ocurrido un error",
                variant: "destructive",
                description: `Hubo un error al momento de crear el movimiento`,
            })
        }
    })
    return mutation
}
