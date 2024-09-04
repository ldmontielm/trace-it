import { Separator } from '@/components/ui/separator'
import React from 'react'
import { FormCreate } from './components'

export default function page() {
  return (
    <div className='px-4 max-w-3xl mx-auto py-10'>
        <div className='space-y-4 mb-5'>
            <div>
                <h1 className='text-neutral-950 font-semibold text-lg tracking-tight'>Agregar Nuevo Proveedor</h1>
                <p className='text-muted-foreground font-medium text-xs'>Registro de proveedores</p>
            </div>
            <Separator />
        </div>
        <FormCreate />
    </div>
  )
}