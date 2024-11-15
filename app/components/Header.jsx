import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full max-w-[1185px] max-lg:px-6 mx-auto'>
        <Image src='/images/Outlook-image.png' width={200} height={150} alt='elbrit' className='mt-4 mb-2'/>
    </div>
  )
}

export default Header