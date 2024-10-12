"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from '@tanstack/react-query';
import { PropsForm } from '../../zod-schema';
import { GetAllWarehousesAction } from '@/app/(pages)/warehouses/services';

interface Props extends PropsForm{
    type: "origination_warehouse" | "destination_warehouse"
    title: string
}

export default function SelectWarehouse({ form, type, title }: Props) {
    const queryWarehouses = useQuery({queryKey: ['warehouses'], queryFn: GetAllWarehousesAction})
    
    return (
        <FormField
            control={form.control}
            name={type}
            render={({ field }) => (
            <FormItem>
                <FormLabel>{title}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className='capitalize'>
                    <SelectTrigger>
                        <SelectValue placeholder="Seleccionar Almacen" />
                    </SelectTrigger>
                </FormControl>
                <SelectContent>
                    {
                        queryWarehouses.data && queryWarehouses.data.map((warehouse) => (
                            <SelectItem key={warehouse.id} value={warehouse.id} className='capitalize'>{warehouse.name}</SelectItem>
                        ))
                    }
                </SelectContent>
                </Select>
                <FormMessage />
            </FormItem>
            )}
        />
    )
}
