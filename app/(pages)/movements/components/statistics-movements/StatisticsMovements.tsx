import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TrendingUpIcon, TrendingDownIcon, BarChart2Icon } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export function StatisticsMovements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Inventario Actual</CardTitle>
                <div className='w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center'>
                    <BarChart2Icon className="h-4 w-4 text-muted-foreground" />
                </div>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">134</div>
                <p className="text-xs text-muted-foreground">Valor: ${"30000".toLocaleString()}</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Entradas</CardTitle>
                <TrendingUpIcon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">231</div>
                <p className="text-xs text-muted-foreground">Últimos 30 días</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Salidas</CardTitle>
                <TrendingDownIcon className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">5</div>
                <p className="text-xs text-muted-foreground">Últimos 30 días</p>
            </CardContent>
        </Card>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Último Movimiento</CardTitle>
                <Badge variant="outline">inicial</Badge>
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">Pescado Prodido</div>
                <p className="text-xs text-muted-foreground">10/09/2024</p>
            </CardContent>
        </Card>
    </div>
  )
}