import React from 'react'

const CustomBlockQuote = ({text}) => {
  return (
    <div className='bg-blue-200'>
      <img src="/quotes.jpeg" alt="image" className='max-w-[2rem]' />
        {text}
    </div>
  )
}

export default CustomBlockQuote