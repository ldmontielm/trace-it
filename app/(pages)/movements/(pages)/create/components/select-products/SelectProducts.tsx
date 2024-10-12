"use client"

import React, { useEffect, useState } from 'react'
import { useProducts } from '@/app/(pages)/products/hooks'
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
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { PropsForm } from '../../zod-schema'

export default function SelectProducts({ form }: PropsForm) {
    const { data, isLoading, isError } = useProducts()
    const [ open, setOpen ] = useState(false)
    const [ value, setValue ] = useState("")

    return (
        <FormField
            control={form.control}
            name="product"
            render={({ field }) => (
                <FormItem className="mb-2">
                    <FormLabel>Producto</FormLabel>
                    <Popover open={open} onOpenChange={setOpen}>
                        <PopoverTrigger asChild>
                            <Button
                                variant="outline"
                                role="combobox"
                                aria-expanded={open}
                                className='w-full justify-between text-xs'
                            >
                                <div className='flex items-center gap-2'>
                                    {
                                        value ? data.find((product) => product.name === value)?.name : "Productos..."
                                    }
                                </div>
                                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                            </Button>
                        </PopoverTrigger>
                    <PopoverContent className='w-full p-0' align='start'>
                        <Command className='w-full'>
                            <CommandInput placeholder='Buscar almacén...' />
                            <CommandList>
                                <CommandEmpty>Producto no encontrado.</CommandEmpty>
                                <CommandGroup>
                                    {
                                        data.map((product) => (
                                            <CommandItem
                                                key={product.id}
                                                value={product.name}
                                                className='text-xs'
                                                onSelect={(currentValue) => {
                                                    if(value === ""){
                                                        setValue(currentValue)
                                                        form.setValue("product", product.id)
                                                    }else{
                                                        if(value === currentValue){
                                                            setValue("")
                                                            form.setValue("product", "")
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
                </FormItem>
            )} 
        />
    )
}
