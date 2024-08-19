"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UseFormReturn } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { GetAllWarehouses } from '@/app/(pages)/products/services';
import { PropsForm } from '../../zod-schema';

export default function SelectWarehouse({ form }:PropsForm) {
    const queryWarehouses = useQuery({queryKey: ['warehouses'], queryFn: GetAllWarehouses})
    
    return (
        <FormField
            control={form.control}
            name="warehouse"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Almacén del Producto</FormLabel>
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
                <FormDescription>Elige el almacén del producto.</FormDescription>
                <FormMessage />
            </FormItem>
            )}
        />
    )
}
