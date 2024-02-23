import React from 'react'

import { IconProps } from '../../../../../lib/sanity/types'

function Leftarow({ className }: IconProps) {
    return (
        <div>
            <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
                className={className}
            >
                <path
                    d="M4.16663 10.5001L15.8333 10.5001M15.8333 10.5001L9.99996 16.3334M15.8333 10.5001L9.99996 4.66675"
                    stroke="#9900CC"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        </div>
    )
}

export default Leftarow
