"use client"

import React, { useEffect } from 'react'
import { useBreadcrumbStore } from '@/store/breadcrumb'
import Link from 'next/link'
import { Package, Container, ChevronRight, LifeBuoy, Settings2, Home, CircleFadingPlus, Blocks, Folders, PackagePlus, Contact, Slash, UserPlus} from "lucide-react"
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
    const { crumblist, setCrumblist } = useBreadcrumbStore()
    const pathname = usePathname()
    
    useEffect(() => {
        const routes = pathname.split("/")
        routes.shift()

        const home = { icon: Home, name: "Inicio" ,url: "/"}

        if(routes.length > 1){
            if(routes.includes("products") && routes.includes("create")){
                setCrumblist([home,{
                    icon: Package,
                    name: "Productos",
                    url: `/products`
                }, {
                    icon: CircleFadingPlus,
                    name: "Crear Producto",
                    url: `/products/create`
                }])
            } else if(routes.includes("suppliers") && routes.includes("create")){
                setCrumblist([home,{
                    icon: Contact,
                    name: "Proveedores",
                    url: `/suppliers`
                }, {
                    icon: CircleFadingPlus,
                    name: "Crear Proveedor",
                    url: `/suppliers/create`
                }])
            } else if(routes.includes("movements") && routes.includes("create")){
                setCrumblist([home,{
                    icon: PackagePlus,
                    name: "Movimientos",
                    url: `/movements`
                }, {
                    icon: CircleFadingPlus,
                    name: "Registrar Movimiento",
                    url: `/movements/create`
                }])             
            }
        }else{
            
            routes.forEach((route) => {
                switch (route) {
                    case "inventory":
                        setCrumblist([home,{
                            icon: Blocks,
                            name: "Inventario",
                            url: `/${route}`
                        }])
                        break
                    case "products":
                        setCrumblist([home,{
                            icon: Package,
                            name: "Productos",
                            url: `/${route}`
                        }])
                        break;
                    case "categories":
                        setCrumblist([home,{
                            icon: Folders,
                            name: "Categorías",
                            url: `/${route}`
                        }])
                        break
                    case "movements":
                        setCrumblist([home,{
                            icon: PackagePlus,
                            name: "Movimientos",
                            url: `/${route}`
                        }])
                        break
                    case "warehouses":
                        setCrumblist([home,{
                            icon: Container,
                            name: "Almacenes",
                            url: `/${route}`
                        }])
                        break
                    case "suppliers":
                        setCrumblist([home,{
                            icon: Contact,
                            name: "Proveedores",
                            url: `/${route}`
                        }])
                        break
                    case "":
                        setCrumblist([home, {
                            icon: Contact,
                            name: "Panel Principal",
                            url: `/${route}`
                        }])
                        break
                }
            })
        }

    }, [pathname])

    return (
    <div className='border-b bg-white dark:bg-neutral-800 dark:border-b-neutral-700/50'>
        <div className='py-3 px-4 flex items-center jusitfy-start max-w-7xl mx-auto'>
           {
            crumblist.map((crumb, index) => (
                <div className='flex items-center gap-2' key={index}>
                    <Link href={crumb.url} className='flex items-center gap-1 text-xs'>
                        {/* {<crumb.icon size={14} />} */}
                        <span className='font-semibold'>{crumb.name}</span>
                    </Link>
                    {
                        crumblist.length !== index+1 ? (
                            <ChevronRight className='text-neutral-300 mr-2' size={12} />
                        ) : ""
                    }
                </div>
            ))
           }
        </div>
    </div>
  )
}
