import React from 'react'
import { LoadSupplier } from './components'
import { Separator } from '@/components/ui/separator'

interface Props{
    params: {
        id: string
    }
}

export default function page({ params }:Props) {
    
    return (
        <div className="px-4 max-w-3xl mx-auto py-10">
            <div className='space-y-4 mb-5'>
                <div>
                    <h1 className='text-neutral-950 font-semibold text-lg tracking-tight'>Editar Proveedor</h1>
                    <p className='text-muted-foreground font-medium text-xs'>Actualizar los datos del proveedor.</p>
                </div>
                <Separator />
            </div>
            <LoadSupplier id={params.id} />
        </div>
    )
}
