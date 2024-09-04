import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, Move, PencilRuler } from "lucide-react";
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
import { Inventory } from "../../models";
import { Product } from "../../(pages)/products/models";
import { SetQuantity } from "../set-quantity";

export const columns: ColumnDef<Inventory>[] = [
    {
        accessorKey: "product",
        header: "Producto",
        cell: ({ row }) => {
            const product: Product = row.getValue("product")
            return (
                <div className="flex items-center gap-2 w-[540px]">
                    <div className="flex flex-col gap-1">
                        <p className="capitalize font-semibold">{product.name}</p>
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
        accessorKey: "warehouse",
        header: "Álmacen",
        cell: ({ row }) => {
            const inventory = row.original
            return inventory.location.warehouse.name
        }
    },
    {
        accessorKey: "quantity",
        header: "Disponible",
        cell: ({ row }) => {
            return <div className="font-medium text-neutral-900 capitalize">{row.getValue("quantity")}</div>
        }
    },
    {
        accessorKey: "barcode",
        header: "Codigo de Barras",
    },
    {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => {
            const inventory = row.original
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
                            <SetQuantity inventory={inventory} />
                        </DropdownMenuGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]