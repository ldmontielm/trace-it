import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Filter } from "lucide-react"
import { Movement } from "../../models"
import { Table } from "@tanstack/react-table"
import { SelectProducts } from "../select-products"


interface Props {
  table: Table<Movement>,
}

export default function FilterMovements({ table }: Props) {
  return (
    <Popover>
    <PopoverTrigger asChild>
      <Button variant="outline" size="icon">
        <Filter size={14} />
      </Button>
    </PopoverTrigger>
    <PopoverContent className="w-80">
      <div className="grid grid-cols-1 gap-4">
        <div className="space-y-2">
          <h4 className="font-medium leading-none">Más Filtros</h4>
          <p className="text-sm text-muted-foreground">
            Implementa más filtros de los movimientos.
          </p>
        </div>
        <SelectProducts table={table}/>
      </div>
    </PopoverContent>
  </Popover>
  )
}
