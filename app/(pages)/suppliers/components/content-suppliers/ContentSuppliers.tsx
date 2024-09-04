"use client"
import React, { useState } from 'react'
import { useSuppliers } from '../../hooks'
import { columns } from '../columns/columns'
import { Datatable } from '@/components/datatable'
import { 
    getCoreRowModel, 
    useReactTable, 
    getPaginationRowModel, 
    ColumnFiltersState, 
    getFilteredRowModel, 
    getSortedRowModel, 
    getFacetedRowModel, 
    getFacetedUniqueValues 
} from '@tanstack/react-table'
import { Loader, Ban, Plus } from 'lucide-react'
import { Paginator } from '@/components/paginator'
import { Input } from '@/components/ui/input'
import { AddSupplier } from '../add-supplier'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'


export default function ContentSuppliers() {
    const {data, isLoading, isError } = useSuppliers()
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
                <h3 className='font-extrabold text-xl mb-1'>Cargando Proveedores</h3>
                <p className='text-muted-foreground text-sm'>Estamos cargando la información relacionado con los proveedores.</p>
            </div>
        );
    }
    if (isError) {
        return (
            <div className='border mt-10 p-4 flex flex-col text-center items-center justify-center'>
                <Ban size={16} className='mb-3' />
                <h3 className='font-extrabold text-xl mb-1'>Error En Proveedores</h3>
                <p className='text-muted-foreground text-sm'>Ha ocurrido un error al cargar los proveedores.</p>
            </div>
        );
    }

    return (
        <div className='space-y-5'>
            <div className='space-y-5'>
                <div className='space-y-3 md:space-y-0 md:flex items-center justify-between'>
                    <div className='w-full flex items-center gap-2'>
                        <Input 
                            placeholder='Filtrar por NIT...'
                            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                            onChange={(event) => table.getColumn("name")?.setFilterValue(event.target.value)}
                            className='md:max-w-xs'
                        />
                    </div>
                    <div>
                        <Link
                            href={"/suppliers/create"}
                            className={`${buttonVariants({
                            size: "sm",
                            })} rounded-lg font-bold`}
                        >
                            <Plus size={16} className="mr-2" />
                            Agregar Proveedor
                        </Link>
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
