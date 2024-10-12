"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Movement, MovementType } from "../../models";
import dayjs from "dayjs";
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
import { EllipsisVertical } from "lucide-react";
import { Button } from "@/components/ui/button";

export const columns: ColumnDef<Movement>[] = [
    {
        accessorKey: "created_at",
        header: "Fecha",
        cell: ({ row }) => dayjs(row.getValue("created_at")).format('DD/MM/YYYY')
    },
    {
        accessorKey: "product",
        header: "Producto",
        cell: ({ row }) => row.getValue("product")
    },
    {
        accessorKey: "type",
        header: "Tipo",
        cell: ({ row }) => {
            const type = row.getValue("type")
            switch(type){
                case MovementType.inventory_entry:
                    return <Badge variant="inventory_entry">Entrada Inventario</Badge>
                case MovementType.inventory_outflow:
                    return <Badge variant="inventory_outflow">Salida Inventario</Badge>
                default:
                    return row.getValue("type")
            }
        }
    },
    {
        accessorKey: "quantity",
        header: "Cantidad",
        cell: ({ row }) => {
            return <div className="font-medium text-neutral-900 capitalize">{row.getValue("quantity")}</div>
        }
    }
]