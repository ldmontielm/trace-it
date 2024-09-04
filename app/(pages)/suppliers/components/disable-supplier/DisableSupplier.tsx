"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2 } from 'lucide-react'
import { useSupplierDisableMutation } from '../../hooks'
import { Supplier } from '../../models'


interface Props {
  supplier: Supplier
}

export default function DisableSupplier({ supplier }: Props) {
  const { mutate } = useSupplierDisableMutation()
  const [open, setOpen] = useState(false)

  function onSubmit() {
    const formData = new FormData()
    formData.append('id', supplier.id)
    mutate(formData)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className='relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50'>
            <Trash2 size={14} />
            <span>Inhabilitar</span>
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg overflow-hidden">
        <div className="border-b flex items-center justify-between">
          <div className="bg-neutral-50 p-4 w-full">
            <h2 className="font-bold text-lg">Inhabilitar Proveedor</h2>
            <p className="text-xs text-muted-foreground">
            ¿Esta seguro de que desea inhabilitar este proveedor - <span className='font-medium text-neutral-900'>{supplier.name}</span>?.
            </p>
          </div>
        </div>
        <div className="px-4 text-sm">
          <DialogFooter className='pb-4'>
            <Button type="submit" size="sm" onClick={() => onSubmit()}>Inhabilitar</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}