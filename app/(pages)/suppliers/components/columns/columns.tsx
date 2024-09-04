import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { Edit2, EllipsisVertical } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Supplier } from "../../models";
import { Badge } from "@/components/ui/badge";
import { DisableSupplier } from "../disable-supplier";
import { EnableSupplier } from "../enable-supplier";
import Link from "next/link";

export const columns: ColumnDef<Supplier>[] = [
    {
        accessorKey: "name",
        header: "Nombre",
    },
    {
        accessorKey: "email",
        header: "Correo",
    },
    {
        accessorKey: "phone",
        header: "Teléfono",
    },
    {
        accessorKey: "nit",
        header: "NIT",
    },
    {
        accessorKey: "company",
        header: "Compañía",
    },
    {
        accessorKey: "city",
        header: "Ciudad",
    },
    {
        accessorKey: "status",
        header: "Estado",
        cell: ({row}) => {
            const status = row.getValue('status')
            return <Badge variant="outline">{status ? 'Activo' : 'Inactivo'}</Badge>
        }
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const supplier = row.original
            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon_xs">
                            <EllipsisVertical size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <Link href={`/suppliers/edit/${supplier.id}`} className="className='relative text-neutral-900 flex gap-2 items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent data-[disabled]:pointer-events-none data-[disabled]:opacity-50 cursor-pointer hover:bg-gray-50'">
                                <Edit2 size={14} />
                                <span>Editar proveedor</span>
                            </Link>
                            {
                                supplier.status ? (
                                    <DisableSupplier supplier={supplier}/>
                                ): <EnableSupplier supplier={supplier} />
                            }
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]