"use client"
import React, { useState } from 'react'
import { useInventories } from '../../hooks'
import { columns } from '../columns/columns'
import { Datatable } from '@/components/datatable'
import { getCoreRowModel, useReactTable, getPaginationRowModel, ColumnFiltersState, getFilteredRowModel, getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table'
import { Loader, Ban } from 'lucide-react'
import { Paginator } from '@/components/paginator'
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Input } from '@/components/ui/input'


export default function ContentInventories() {
    const {data, isLoading, isError } = useInventories()
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        state: {
            columnFilters,
        }
    })

    if (isLoading) {
        return (
            <div className='border p-4 flex flex-col text-center items-center justify-center'>
                <Loader size={16} className='animate-spin mb-3' />
                <h3 className='font-extrabold text-xl mb-1'>Cargando Productos</h3>
                <p className='text-muted-foreground text-sm'>Estamos cargando la información relacionado con los productos.</p>
            </div>
        );
    }
    if (isError) {
        return (
            <div className='border mt-10 p-4 flex flex-col text-center items-center justify-center'>
                <Ban size={16} className='mb-3' />
                <h3 className='font-extrabold text-xl mb-1'>Error En Productos</h3>
                <p className='text-muted-foreground text-sm'>Ha ocurrido un error al cargar los productos.</p>
            </div>
        );
    }

    return (
        <div className='space-y-5'>
            <div className='space-y-5'>
                <div className='space-y-3 md:space-y-0 md:flex items-center justify-between'>
                    <div className='w-full flex items-center gap-2'>
                        <Input 
                            placeholder='Filtrar por SKU...'
                            value={(table.getColumn("sku")?.getFilterValue() as string) ?? ""}
                            onChange={(event) => table.getColumn("sku")?.setFilterValue(event.target.value)}
                            className='md:max-w-xs'
                        />
                    </div>
                </div>
                <div className='border rounded-lg'>
                    <Datatable columns={columns} table={table} />
                </div>
            </div>
            <Paginator table={table} />
        </div>
    )
}
