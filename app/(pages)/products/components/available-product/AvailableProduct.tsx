"use client"

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Trash2 } from 'lucide-react'
import { useProductAvailableMutation } from '../../hooks'
import { Product } from '../../models'


interface Props {
  product: Product
}
export default function AvailableProduct({ product }: Props) {
  const mutation = useProductAvailableMutation()
  const [open, setOpen] = useState(false)

  function onSubmit() {
    mutation.mutate(product.id)
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <span className='relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50'>
            <Trash2 size={14} />
            <span>Habilitar</span>
        </span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] p-4">
        <DialogHeader>
          <DialogTitle>Habilitar Producto</DialogTitle>
          <DialogDescription>
            ¿Esta seguro de que desea habilitar este producto - <span className='font-medium text-neutral-900'>{product.name}</span>?.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" size="sm" onClick={() => onSubmit()}>Habilitar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
