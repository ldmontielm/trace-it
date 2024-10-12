"use client"

import { Package, Container, ChevronRight, LifeBuoy, Settings2, Home, Blocks, Folders, PackagePlus, Contact} from "lucide-react"
import Logo from "@/public/traceit.svg"
import { buttonVariants } from '../ui/button'
import { cn } from '@/lib/utils'
import { useSidebarStore } from '@/store'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Tooltip, TooltipProvider, TooltipContent, TooltipTrigger } from "../ui/tooltip"
import Image from 'next/image'
import { useState } from "react"
import { Button } from "../ui/button"

export default function Sidebar() {
    const expanded = useSidebarStore(state => state.expanded)

    const pathname = usePathname()

    const links = [
        {
            id: 1,
            label: "Panel principal",
            icon: <Home size={14} />,
            link: "/"
        },
        {
            id: 2,
            label: "Productos",
            icon: <Package size={14} />,
            link: "/products",
        },
        {
            id: 3,
            label: "Categoría",
            icon: <Folders size={14} />,
            link: "/categories"
        },
        {
            id: 4,
            label: "Movimientos",
            icon: <PackagePlus size={14} />,
            link: "/movements",
        },
        {
            id: 5,
            label: "Almacenes",
            icon: <Container size={14} />,
            link: "/warehouses"
        },
        {
            id: 6,
            label: "Proveedores",
            icon: <Contact size={14} />,
            link: "/suppliers"
        }
    ]

    const links_two = [
        {
            id: 1,
            label: "Soporte",
            icon: <LifeBuoy size={14} />,
            link: "/support"
        },
        {
            id: 2,
            label: "Configuración",
            icon: <Settings2 size={14} />,
            link: "/settings"
        }
    ]

    return (
        <TooltipProvider delayDuration={0}>
            <aside className={`${expanded ? 'w-72' : 'w-[52px]'} hidden md:inline-block fixed top-0 left-0 z-40 h-screen border-r bg-white dark:bg-neutral-800 dark:border-r-neutral-700/50`}>
                <div className="group flex flex-col gap-2 h-full" data-collapsed={expanded}>
                    <div className='flex items-center gap-2 bg-neutral-50 pl-2.5 pt-2 pb-2 border-b'>
                        <Image src={Logo} alt='Logo de la empresa' height={36} className="w-8 h-8"/>
                        {
                            expanded ? (
                                <div className="flex flex-col">
                                    <p className='font-extrabold dark:whit leading-4'>TraceIt</p>
                                    <p className="text-muted-foreground text-xs mb-0">example@silverbox.com.co</p>
                                </div>
                            ) : ""
                        }
                    </div>
                    <div className="flex flex-col h-full justify-between mb-2">
                        <nav className='grid gap-1 px-2 group-[[data-collapsed=false]]:justify-center group-[[data-collapsed=true]]:px-2'>
                            {
                                links.map((item) => (
                                    <Tooltip key={item.id} delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <Link href={item.link} className={
                                                cn(
                                                    buttonVariants({
                                                        size: expanded ? 'lg' : 'icon', 
                                                        variant: pathname === item.link ? 'secondary' : 'ghost'
                                                    }),
                                                    `${expanded ? 'justify-between gap-3 h-9 px-[11px]' : 'h-9 w-9'} ${pathname === item.link ? 'overflow-hidden' : 'ghost'}`)}>
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    <span className={`${expanded ? 'font-semibold text-xs' : 'hidden'}`}>{item.label}</span>
                                                </div>
                                                <ChevronRight size={14} className={`${expanded ? 'inline-block' : 'hidden'}`} />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent className={`${expanded ? 'hidden' : 'flex items-center gap-4'}`} side="right">
                                            {item.label}
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </nav>
                        
                        <nav className='grid gap-1 px-2 group-[[data-collapsed=false]]:justify-center group-[[data-collapsed=true]]:px-2'>
                            {
                                links_two.map((item) => (        
                                    <Tooltip key={item.id} delayDuration={0}>
                                        <TooltipTrigger asChild>
                                            <Link href={item.link} className={
                                                cn(
                                                    buttonVariants({
                                                        size: expanded ? 'lg' : 'icon', 
                                                        variant: pathname === item.link ? 'secondary' : 'ghost'
                                                    }),
                                                    `${expanded ? 'justify-between gap-3 h-9 px-[11px]' : 'h-9 w-9'} ${pathname === item.link ? 'overflow-hidden' : 'ghost'}`)}>
                                                <div className="flex items-center gap-3">
                                                    {item.icon}
                                                    <span className={`${expanded ? 'font-semibold text-xs' : 'hidden'}`}>{item.label}</span>
                                                </div>
                                                <ChevronRight size={14} className={`${expanded ? 'inline-block' : 'hidden'}`} />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent className={`${expanded ? 'hidden' : 'flex items-center gap-4'}`} side="right">
                                            {item.label}
                                        </TooltipContent>
                                    </Tooltip>
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </aside>
        </TooltipProvider>
    )
}
