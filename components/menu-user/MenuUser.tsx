import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { CircleUserRound, Info, ShieldCheck, LogOut } from 'lucide-react'
import LogoAvatar from "@/public/avatar0002.jpg"
import Image from 'next/image'

export default function MenuUser() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image src={LogoAvatar} alt='@profile' className='cursor-pointer w-8 h-8 rounded-full' />
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end' className='w-64 rounded-lg'>
        <DropdownMenuGroup>
          <DropdownMenuItem asChild className='p-2 cursor-pointer'>
            <Link href={"#"} className='gap-2 flex items-center justify-between'>
              <p className='text-neutral-600 text-sm'>Mi Perfil</p>
              <CircleUserRound className='text-neutral-600' size={16} />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='p-2 cursor-pointer'>
            <Link href={"#"} className='gap-2 flex items-center justify-between'>
                <p className='text-neutral-600 text-sm'>Centro de Ayuda</p>
                <Info className='text-neutral-600' size={16} />
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild className='p-2 cursor-pointer'>
            <Link href={"#"} className='gap-2 flex items-center justify-between'>
              <p className='text-neutral-600 text-sm'>Políticas y Privacidad</p>
              <ShieldCheck className='text-neutral-600' size={16} />
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuItem asChild className='p-3 cursor-pointer'>
            <Link href={"#"} className='gap-2 flex items-center justify-between'>
              <p className='text-neutral-600 text-sm'>Cerrar Sesión</p>
              <LogOut className='text-neutral-600' size={16} />
            </Link>
          </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
