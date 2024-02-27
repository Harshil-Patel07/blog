import Link from 'next/link'
import React from 'react'

const CustomButton = ({block}) => {
  console.log(block)
  const {variant,label,slug}=block || {}
  return (
    <Link href={slug.current} className='bg-[red]'>{label}</Link>
  )
}

export default CustomButton