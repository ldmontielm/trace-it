import {
    ColumnDef,
    flexRender,
    Table as ReactTable,
} from "@tanstack/react-table";
import { MovementType } from "../../models";
import { PackageMinus, PackagePlus } from "lucide-react";
import dayjs from "dayjs";


interface Props<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    table: ReactTable<TData>;
}


export default function DatatableActivity<TData, TValue>({
    columns,
    table,
}: Props<TData, TValue>) {
  return (
    <div>
        { table.getRowModel().rows.length ? (
            <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md border">
                <div className="px-6 pt-5 pb-3 border-b">
                    <p className="text-sm font-bold">Movimientos</p>
                </div>
                <div className="mt-5 flex flex-col px-5">
                    {
                        table.getRowModel().rows.map((row, index) => {
                            const type = row.getValue('type')

                            return (
                                <div key={row.id}>
                                    <div className="flex items-start relative">
                                        {
                                            index+1 !== table.getRowModel().rows?.length ? (
                                                <div className="w-9 left-0 top-9 absolute bottom-0 translate-x-1/2 border-l border-l-gray-300"/>
                                            ) : null
                                        }
                                        <div className="flex items-center justify-center shrink-0 rounded-full bg-green-100 border border-green-300 size-9 text-green-700">
                                            {
                                                type === MovementType.inventory_entry ? (
                                                    <PackagePlus size={16} className="text-green-700" />
                                                ) : (
                                                    <PackageMinus size={16} className="text-green-700" />
                                                )
                                            }
                                        </div>
                                        
                                        <div className="pl-2.5 mb-7 text-md grow">
                                        {
                                            type === MovementType.inventory_entry ? (
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-gray-800">Entrada de <span className="font-semibold text-green-700">{row.getValue('quantity')} {row.getValue('product')}</span></p>
                                                    <p className="text-xs text-gray-600">{dayjs(row.getValue('created_at')).format('MM/DD/YYYY, h:mm A')}</p>
                                                </div>
                                            ) : (
                                                <div className="flex flex-col">
                                                    <p className="text-sm text-gray-800">Salida de <span className="font-semibold">{row.getValue('quantity')} {row.getValue('product')}</span></p>
                                                    <p className="text-xs text-gray-600">{dayjs(row.getValue('created_at')).format('MM/DD/YYYY, H:mm A')}</p>
                                                </div>
                                            )
                                        }
                                    </div>
                                    </div>
                                    
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        ) : (
            <div className="h-24 text-center">
                No se han encontrado resultados.
            </div>
        )}
    </div>
  )
}
