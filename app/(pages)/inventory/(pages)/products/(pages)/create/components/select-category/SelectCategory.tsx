"use client"
import React from 'react'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useQuery } from '@tanstack/react-query';
import { GetAllCategories } from '@/app/(pages)/inventory/(pages)/categories/services';
import { PropsForm } from '../../zod-schema';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function SelectCategory({form}:PropsForm) {
    const queryCategory = useQuery({queryKey: ['categories'], queryFn: GetAllCategories})
    
    return (
        <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
            <FormItem>
                <FormLabel>Categoría del Producto</FormLabel>
                <div className='flex items-center gap-2'>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl className='capitalize'>
                            <SelectTrigger>
                                <SelectValue placeholder="Seleccionar Categoría" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {
                                queryCategory.data && queryCategory.data.map((category) => (
                                    <SelectItem key={category.id} value={category.id} className='capitalize'>{category.name}</SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <FormMessage />
            </FormItem>
            )}
        />
    )
}