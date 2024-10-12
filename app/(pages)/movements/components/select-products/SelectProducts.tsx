"use client"

import React, { useEffect, useState } from 'react'
import { useProducts } from '@/app/(pages)/products/hooks'
import { Movement } from '../../models'
import { Table } from '@tanstack/react-table'
import { Container, X, Check, ChevronsUpDown, Package } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from '@/lib/utils'

interface Props {
    table: Table<Movement>,
}

export default function SelectProducts({table}: Props) {
    const { data, isLoading, isError } = useProducts()
    const [ open, setOpen ] = useState(false)
    const [ value, setValue ] = useState("")
    const [ clean, setClean ] = useState(true)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className='w-full justify-between'
                >
                    <div className='flex items-center gap-2'>
                        <Package size={14} /> 
                        {
                            value ? data.find((product) => product.name === value)?.name : "Productos..."
                        }
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
        <PopoverContent className='w-fit max-w-[300px] p-0' align='start'>
            <Command>
                <CommandInput placeholder='Buscar almacén...' />
                <CommandList>
                    <CommandEmpty>Producto no encontrado.</CommandEmpty>
                    <CommandGroup>
                        {
                            data.map((product) => (
                                <CommandItem
                                    key={product.id}
                                    value={product.name}
                                    onSelect={(currentValue) => {
                                        if(value === ""){
                                            setValue(currentValue)
                                        }else{
                                            if(value === currentValue){
                                                setValue("")
                                            }
                                        }
                                        setOpen(false);
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === product.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {product.name}
                                </CommandItem>
                            ))
                        }
                    </CommandGroup>
                </CommandList>
            </Command>
        </PopoverContent>
    </Popover>
    )
}
