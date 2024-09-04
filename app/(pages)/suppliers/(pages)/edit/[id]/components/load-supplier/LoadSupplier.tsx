"use client"

import React from 'react'
import { useSupplierById } from '@/app/(pages)/suppliers/hooks'
import { FormEdit } from '../form-edit'

interface Props{
    id: string
}


export default function LoadSupplier({id}: Props) {
    const {data, isLoading} = useSupplierById(id)
    if(isLoading) {
        return (
            <div>
                Cargando Proveedor
            </div>
        )
    }
    return (
        <FormEdit supplier={data} />
    )
}
