import {
    ColumnDef,
    flexRender,
    Table as ReactTable,
} from "@tanstack/react-table";
import { Container } from "lucide-react";
import { Separator } from "@/components/ui/separator";


interface Props<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    table: ReactTable<TData>;
}


export default function DatatableCard<TData, TValue>({
    columns,
    table,
}: Props<TData, TValue>) {
  return (
    <div>
      {table.getRowModel().rows?.length ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    table.getRowModel().rows.map((row) => (
                        <div key={row.id} className="border rounded p-2">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 flex items-center justify-center bg-neutral-50 rounded">
                                        <Container size={14} />
                                    </div>
                                    <p className="text-lg font-bold">{row.getValue('name')}</p>
                                </div>
                                <div>
                                {row.getVisibleCells().map((cell) => {
                                    if (cell.column.id === 'actions') {
                                        return (
                                            <div key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                                </div>
                            </div>
                            <Separator className="my-3" />
                            <div className="my-2 text-xs">
                                <p className="text-muted-foreground">Ciudad: <span className="text-neutral-900 font-semibold">{row.getValue('city')}</span></p>
                                <p className="text-muted-foreground">Dirección: <span className="text-neutral-900 font-semibold">{row.getValue('address')}</span></p>
                                <p className="text-muted-foreground">Estado: <span className="text-neutral-900 font-semibold">{row.getValue('status') === 'active' ? 'Activo' : 'Inactivo'}</span></p>
                            </div>
                        </div>
                    ))
                }
            </div>
        ) : (
            <div className="h-24 text-center">
                No se han encontrado resultados.
            </div>
        )}
    </div>
  )
}
