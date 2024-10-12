"use client"

import React, { useState } from 'react'
import { useMovements } from '../../hooks/use-movements'
import { getCoreRowModel, useReactTable, getPaginationRowModel, ColumnFiltersState, getFilteredRowModel, getSortedRowModel, getFacetedRowModel, getFacetedUniqueValues } from '@tanstack/react-table'
import { columns } from '../columns'
import { Ban, Loader, Plus } from 'lucide-react'
import { Datatable } from '@/components/datatable'
import { Input } from '@/components/ui/input'
import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import { DatatableActivity } from '../datatable-activity'

export default function ContentMovements() {
    const { data, isLoading, isError } = useMovements()
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
        <div className='space-y-5 mt-5'>
            <div className='space-y-3 md:space-y-0 md:flex items-center justify-between'>
                <div>
                    <Input 
                        placeholder='Filtrar por producto...'
                        value={(table.getColumn("product")?.getFilterValue() as string) ?? ""}
                        onChange={(event) => table.getColumn("product")?.setFilterValue(event.target.value)}
                        className='w-full md:max-w-md'
                    />
                </div>
                <div className="flex items-center gap-2">
                    <Link
                        href={"/movements/create"}
                        className={`${buttonVariants({
                        size: "sm",
                        })} rounded-lg font-bold`}
                    >
                        <Plus size={16} className="mr-2" />
                        Registrar Movimiento
                    </Link>
                </div>
            </div>
            <div>
                <DatatableActivity table={table} columns={columns} />
            </div>
        </div>
    )
}
