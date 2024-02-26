import Link from 'next/link'
import React from 'react'

const Footer = ({block}) => {
    const {title,socialLinks,links}=block || {}
  return (
    <div>
        {title}

        <ul className='bg-red-200'>
            {socialLinks && socialLinks.map((link)=>{
                const {slug,_key,label}=link || {}
                return (
                    <li key={_key}>
                       {
                        link &&  <Link href={slug || ""} key={_key}>{label}</Link>
                       }
                    </li>
                )
            })}
        </ul>
        <ul className='bg-green-200'>
            {links && links.map((link)=>{
                const {slug,_key,label}=link || {}
                return (
                    <li key={_key}>
                        {
                            link &&  <Link href={slug || ""} key={_key}>{label}</Link>
                        }
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Footer