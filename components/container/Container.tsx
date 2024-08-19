"use client"
import React from 'react'
import { useSidebarStore } from '@/store'

interface Props {
    children: React.ReactNode
}

export default function Container({children}:Props) {
    const expanded = useSidebarStore(state => state.expanded)
    return (
        <div className={`${expanded ? 'md:ml-72' : 'md:ml-[52px]'}`}>
            {children}
        </div>
    )
}
