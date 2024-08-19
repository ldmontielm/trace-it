import React from 'react'

interface Props {
    title: string
    subtitle: string
}


export default function Header({ title, subtitle }: Props) {
  return (
    <div>
      <h1 className='text-neutral-950 font-bold text-2xl'>{ title }</h1>
      <p className='text-muted-foreground font-medium text-sm'>{ subtitle }.</p>
    </div>
  )
}
