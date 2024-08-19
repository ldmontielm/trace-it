import React from 'react'

interface Props {
    children: React.ReactNode
    title: string
}


export default function ContentSectionForm({ children, title }:Props) {
  return (
    <div className='space-y-2'>
        <h2 className='font-semibold capitalize'>{title}</h2>
        <div className='border rounded-lg p-4 space-y-3'>{children}</div>
    </div>
  )
}
