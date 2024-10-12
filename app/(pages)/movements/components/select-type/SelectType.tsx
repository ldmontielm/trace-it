"use client"

import React from 'react'
import { useWarehouses } from '@/app/(pages)/warehouses/hooks'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Movement } from '../../models'
import { Table } from '@tanstack/react-table'
import { CircleDotDashed } from 'lucide-react'
import { MovementType } from '../../models'

interface Props {
    table: Table<Movement>
}


export default function SelectType({ table }: Props) {
    return (
        <Select onValueChange={(e) => {
            table.getColumn("type")?.setFilterValue(e)
        }}>
            <SelectTrigger className='w-fit flex items-center gap-2'>
                <CircleDotDashed size={14} />
                <SelectValue placeholder="Filtrar Tipo" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                <SelectItem value={MovementType.inventory_entry}>Entrada Inventario</SelectItem>
                <SelectItem value={MovementType.inventory_outflow}>Salida Inventario</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
