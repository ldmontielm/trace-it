"use client"

import React, { useEffect, useState } from 'react'
import { MenuUser } from '../menu-user'
import { PanelRightClose, Slash, ChevronRight } from 'lucide-react'
import { Button } from '../ui/button'
import { useSidebarStore } from '@/store'
import { Breadcrumb } from '../breadcrumb'

export default function Navbar() {
    const toggleExpanded = useSidebarStore((state) => state.toggleExpended)
    const expanded = useSidebarStore((state) => state.expanded)
    const mediaMatch = window.matchMedia('(min-width: 768px)')
    const [ matches, setMatches ] = useState(mediaMatch.matches)
    
    useEffect(() => {
        const handler = (ev: MediaQueryListEvent):any => {
            setMatches(ev.matches)
        };
        mediaMatch.addEventListener("change", handler);
        return () => mediaMatch.removeEventListener("change", handler);
    });

    const styleExpanded: React.CSSProperties = {
        width: matches ? `calc(100% - ${expanded ? '288px' : '52px'})` : "100%"
    }   

    return (
        <div className={`fixed top-0`} style={styleExpanded}>
            <div className='border-b bg-white dark:bg-neutral-800 dark:border-b-neutral-700/50'>
                <div className='h-full px-3 py-2 flex items-center justify-between'>
                    <Button variant="outline" size="icon_xs" onClick={toggleExpanded}>
                        <PanelRightClose size={16} className='text-neutral-800' />
                    </Button>
                    <div className='flex items-center gap-2'>
                    <MenuUser />
                    </div>
                </div>
            </div>
            <Breadcrumb />
        </div>
    )
}
