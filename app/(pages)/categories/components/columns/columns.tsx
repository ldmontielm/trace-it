"use client"
import { ColumnDef } from "@tanstack/react-table";
import { Category } from "../../models";
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
import dayjs from 'dayjs';
import { DisableProduct } from '../disable-category'
import { EnableCategory } from '../enable-category'
import { EditCategory } from "../edit-category";

export const columns: ColumnDef<Category>[] = [
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
        accessorKey: "created_at",
        header: "Fecha de creación",
        cell: ({ row }) => {
            const date = dayjs(row.getValue("created_at"))
            return date.format('DD MMMM YYYY')
        }
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({ row }) => {
            const status = row.getValue("status")

            return <Badge variant="outline">{
                status === "inactive" ? "Inactivo" : "Activo"
            }</Badge>
        }
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
                            <EditCategory category={category} />
                            {
                                category.status === "active" ? (
                                    <DisableProduct category={category}/>
                                ): <EnableCategory category={category} />
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]