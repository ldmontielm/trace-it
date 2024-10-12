import React from 'react'
import { ContentMovements } from './components/content-movements'

export default function page() {
  return (
    <div className="px-4 max-w-7xl mx-auto py-10">
      <div className="space-y-5">
        <div>
          <div className="md:flex md:items-end md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <div>
                <h2 className="text-neutral-950 font-bold text-xl">
                  Movimientos de Productos
                </h2>
                <p className="text-muted-foreground text-sm">
                  Gestiona las transacciones de tus producto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContentMovements />
    </div>
  )
}
