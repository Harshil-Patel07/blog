import React from 'react'
import Link from '../Link'
import { LabelLinkType } from '../../../../lib/sanity/types'


const LabelLink: React.FC<{ block: LabelLinkType }> = ({ block }) => {
    const { label, link } = block || {}
    return link ? (
        <Link to={link}>
            {label}
        </Link>
    ) : (
        <span>{label}</span>
    )
}

export default LabelLink
