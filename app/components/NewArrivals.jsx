import React from 'react'
import {newArrivals} from '../lib/arrivals'
import Product from './Product'

const NewArrivals = () => {
  return (
    <div className='w-full max-w-[1185px] mx-auto lg:mt-80 max-sm:mt-[27rem] mt-96 mb-16 flex flex-col items-center gap-2'>
        <p className='text-[#004958] text-sm font-bold'>OUR PRODUCTS</p>
        <h1 className='text-[#004958] text-5xl font-bold'>New Arrivals</h1>
        <div className='flex items-center gap-4 mt-8'>
          <div className='bg-[#8da8d0] w-5 h-5 rounded-full'></div>
          <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-2'> 
            {
                newArrivals.map((product) => <Product key={product.id} product={product}/>)
            }
          </div>
          <div className='bg-[#8da8d0] w-5 h-5 rounded-full'></div>
        </div>
        <button className='underline text-[#004958] font-semibold mt-8'>SEE MORE</button>
    </div>
  )
}

export default NewArrivals