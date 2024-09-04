"use client"

import { ColumnDef } from "@tanstack/react-table";
import { Warehouse } from "../../models";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { DisableWarehouse } from "../disable-warehouse";
import { EnableWarehouse } from "../enable-warehouse";


export const columns: ColumnDef<Warehouse>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
        cell: ({ row }) => {

            return (
                <div className="flex items-center gap-2">
                    <div className="flex flex-col gap-1">
                        <p className="capitalize">{row.getValue("name")}</p>
                    </div>
                </div>
            )
        }
    },
    {
        accessorKey: "address",
        header: "Dirección",
    },
    {
        accessorKey: "city",
        header: "Ciudad",
    },
    {
        accessorKey: "status",
        header: "Estado",
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const category = row.original
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
                            {
                                category.status === "active" ? (
                                    <DisableWarehouse warehouse={category}/>
                                ): <EnableWarehouse warehouse={category} />
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]