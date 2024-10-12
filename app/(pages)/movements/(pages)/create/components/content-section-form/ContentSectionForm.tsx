import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
}

export default function ContentSectionForm({ children, title }:Props) {
  return (
    <div className='space-y-2'>
      <div className='rounded-lg space-y-3'>{children}</div>
    </div>
  )
}
