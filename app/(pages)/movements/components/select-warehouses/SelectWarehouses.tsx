"use client"

import React, { useEffect, useState } from 'react'
import { useWarehouses } from '@/app/(pages)/warehouses/hooks'
import { Movement } from '../../models'
import { Table } from '@tanstack/react-table'
import { Container, X, Check, ChevronsUpDown } from 'lucide-react'
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
    origin: Boolean
}


export default function SelectWarehouses({ table, origin }: Props) {
    const { data, isError, isLoading } = useWarehouses()
    const [ open, setOpen ] = useState(false)
    const [ value, setValue ] = useState("")
    const [ clean, setClean ] = useState(true)

    useEffect(() => {
        if(origin){
            table.getColumn("originating_warehouse")?.setFilterValue(value)
        }else{
            table.getColumn("destination_warehouse")?.setFilterValue(value)
        }
    }, [value]);

    return(
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className='w-fit justify-between'
                >
                    <div className='flex items-center gap-2 text-xs'>
                        <Container size={14} /> 
                        {
                            value ? data.find((warehouse) => warehouse.name === value)?.name : origin ? "Almacén Origen" : "Almacén Destino"
                        }
                    </div>
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-fit p-0' align='start'>
                <Command>
                    <CommandInput placeholder='Buscar almacén...' />
                    <CommandList>
                        <CommandEmpty>Almacén no encontrado.</CommandEmpty>
                        <CommandGroup>
                            {
                                data.map((warehouse) => (
                                    <CommandItem
                                        key={warehouse.id}
                                        value={warehouse.name}
                                        className='text-xs'
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
                                                value === warehouse.name ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {warehouse.name}
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
