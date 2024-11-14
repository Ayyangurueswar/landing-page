import React from 'react'

const Stats = () => {
  return (
    <div className='w-full bg-[#004958] py-10'>
        <div className='w-full max-w-[1185px] mx-auto flex items-center justify-between'>
            <div className='flex flex-col items-center'>
                <p className='text-5xl text-yellow-400 mb-4 font-bold'>14K</p>
                <p className='text-white'>Customers</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-5xl text-yellow-400 mb-4 font-bold'>37K</p>
                <p className='text-white'>Products sold</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-5xl text-yellow-400 mb-4 font-bold'>10+</p>
                <p className='text-white'>Years experience</p>
            </div>
            <div className='flex flex-col items-center'>
                <p className='text-5xl text-yellow-400 mb-4 font-bold'>13</p>
                <p className='text-white'>Licensed Stores</p>
            </div>
        </div>
    </div>
  )
}

export default Stats