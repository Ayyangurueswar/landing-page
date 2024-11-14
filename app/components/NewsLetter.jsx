import React from 'react'
import Image from 'next/image'

const NewsLetter = () => {
  return (
    <div className='w-full mx-auto absolute -top-56'>
        <div className='bg-sky-200 px-8 py-8 flex items-center justify-between rounded-xl max-w-[1185px] mx-auto'>
            <div className='w-1/2'>
                <h2  className='text-blue-400 font-bold'>NEWSLETTER</h2>
                <p className='text-5xl text-[#004958] font-bold mb-8 mt-2 leading-tight'>Take Charge Of Your Health Today</p>
                <p className='text-gray-500 font-semibold'>Sign-up to get news on our latest additions, current health news as well as helpful guides.</p>
                <div className='mt-14 flex items-center gap-4'>
                    <input type='email' className='p-4 rounded-full outline-none w-3/5' placeholder='Email Address'/>
                    <button className='p-4 rounded-full bg-[#004958] w-1/3 font-bold text-white'>SUBSCRIBE</button>
                </div>
            </div>
            <Image src='/images/f2-1.png.png' alt='' width={450} height={700} className='-mt-28'/>
        </div>
    </div>
  )
}

export default NewsLetter