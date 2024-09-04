"use client"

import React from 'react'
import { useDepartments, useCities } from '../../hooks'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { UseFormReturn } from 'react-hook-form'
import {
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";

interface Props {
    form: UseFormReturn<{ name: string; address: string; city: string, department: string; }, any, undefined>
}

export default function SelectDepartments({ form }: Props) {
    const { data, isLoading } = useDepartments()
    const { data:cities, isLoading:isLoadingCities } = useCities(form.formState.defaultValues?.department)

    return (
        <div>
            <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Departamento</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Seleccionar Departamento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Departamentos</SelectLabel>
                                { 
                                    isLoading ? (
                                        "Cargando Departamentos..."
                                    ) : data.departments.map((department) => (   
                                        <SelectItem key={department} value={department}>{department}</SelectItem>
                                    )) 
                                }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormDescription>Departamento del álmacen.</FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Ciudad</FormLabel>
                    <FormControl>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Seleccionar Departamento" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                <SelectLabel>Ciudades</SelectLabel>
                                { 
                                    isLoadingCities ? (
                                        "Cargando Departamentos..."
                                    ) : cities && cities.ciudades.map((city) => (   
                                        <SelectItem key={city} value={city}>{city}</SelectItem>
                                    )) 
                                }
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </FormControl>
                    <FormDescription>Departamento del álmacen.</FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
        </div>
    )
}
