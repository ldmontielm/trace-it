import { create } from 'zustand'
import { LucideProps, Home } from 'lucide-react'
import { ForwardRefExoticComponent, RefAttributes } from 'react'

interface Crumb {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>
    name: string
    url: string
}

interface BreadcrumbState {
    crumblist: Crumb[],
    setCrumblist: (crumb: Crumb[]) => void
}

export const useBreadcrumbStore = create<BreadcrumbState>()((set) => ({
    crumblist: [],
    setCrumblist: (crumb) => set((state) => ( {
        crumblist: crumb
        }
    ))
}))