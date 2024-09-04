import React from 'react'
import { ContentWarehouses } from './components'

export default function page() {
  return (
    <div className="px-4 max-w-7xl mx-auto py-10">
      <div className="space-y-5">
        <div>
          <div className="md:flex md:items-end md:justify-between space-y-4 md:space-y-0">
            <div className="flex items-center gap-2">
              <div>
                <h2 className="text-neutral-950 font-bold text-xl">
                  Listado de Álmacenes
                </h2>
                <p className="text-muted-foreground text-sm">
                  Gestiona tus álmacenes, tienes libertad de agregar la cantidad que desees.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ContentWarehouses />
      </div>
    </div>
  )
}
