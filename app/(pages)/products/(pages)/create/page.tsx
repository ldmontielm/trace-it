import React from 'react'
import { FormCreate } from './components'

export default function page() {
  return (
    <div className='px-4 max-w-5xl mx-auto py-10'>
        <div className='flex items-start gap-4'>
            <div className='space-y-1'>
                <h1 className='text-neutral-950 font-extrabold text-2xl tracking-tight'>Agregar Nuevo Producto</h1>
                <p className='text-muted-foreground font-medium text-sm'>Registra toda la información de tu producto para llevar un seguimiento detallado y mejorar la gestión de productos de tu negocio.</p>
            </div>
        </div>
        <FormCreate />
    </div>
  )
}
