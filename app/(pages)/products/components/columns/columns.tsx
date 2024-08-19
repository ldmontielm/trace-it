"use client"
import { ColumnDef } from "@tanstack/react-table";
import { Product } from "../../models";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Activity, EllipsisVertical, Eye, PinOff, SlidersHorizontal, UserCog } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DisableProduct } from "../disable-product";
import { useState } from "react";
import Link from "next/link";
import { ProductDetailsDialog } from "../product-details-dialog";
import { AvailableProduct } from "../available-product";

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        cell: ({ row }) => {

            return (
                <div className="flex items-center gap-2 w-[540px]">
                    <div className="flex flex-col gap-1">
                        <p className="capitalize">{row.getValue("name")}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "sku",
        header: "SKU",
        cell: ({ row }) => {
            return row.getValue("sku")
        }
    },
    {
        accessorKey: "quantity",
        header: "Cantidad",
        cell: ({ row }) => {
            return <div className="font-medium text-neutral-900 capitalize">{row.getValue("quantity")}</div>
        }
    },
    {
        accessorKey: "price",
        header: "Precio",
        cell: ({ row }) => {
            const price = parseFloat(row.getValue("price"))
            const formatted = new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            }).format(price);
 
            return <div>${formatted}</div>
        }
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => {
            const status = row.getValue("status")

            return <Badge variant="outline">{
                status === "available" ? "Disponible" : 
                status === "scarce" ? "Escaso" : 
                status === "terminated" ? "Terminado" : "Inactivo"
            }</Badge>
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const product = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon_xs">
                            <EllipsisVertical size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-44">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <ProductDetailsDialog product={product} />
                            {/* <span className='relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50'>
                                <Activity size={14} />
                                <span>Actividad</span>
                            </span> */}
                            {
                                product.status === "inactive" ? (
                                    <AvailableProduct product={product} />
                                ) : (
                                    <DisableProduct product={product} />
                                )
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]