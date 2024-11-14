import React from 'react'

const News = () => {
  return (
    <div className='w-full max-w-[1185px] mx-auto my-10'>
        <p className='text-[#004958] font-bold text-center text-sm'>OUR BLOG</p>
        <h1 className='text-[#004958] text-5xl font-bold text-center mt-3'>Latest News</h1>
        <div className='flex items-center justify-between'>
            <div className='w-[250px] h-[350px] bg-[url(/images/blog1-450x580.jpg.png)] rounded-xl relative' style={{backgroundSize: '100% 100%'}}>
                <div className='bg-indigo-800 text-white px-6 py-1 rounded-r-full absolute top-4 -left-3 text-sm'>20 APR</div>
                <h2 className='text-white w-4/5 mx-auto mt-14 font-bold'>The Covid 19 Epidemic In 2022 Is Back</h2>
            </div>
            <div className='w-[250px] h-[350px] bg-[url(/images/blog2-450x580.jpg.png)] mt-36 rounded-xl relative' style={{backgroundSize: '100% 100%'}}>
                <div className='bg-indigo-800 text-white px-6 py-1 rounded-r-full absolute top-4 -left-3 text-sm'>20 APR</div>
                <h2 className='text-white w-4/5 mx-auto mt-14 font-bold'>The Covid 19 Epidemic In 2022 Is Back</h2>
            </div>
            <div className='w-[250px] h-[350px] bg-[url(/images/blog1-450x580.jpg.png)] rounded-xl relative' style={{backgroundSize: '100% 100%'}}>
                <div className='bg-indigo-800 text-white px-6 py-1 rounded-r-full absolute top-4 -left-3 text-sm'>17 MAR</div>
                <h2 className='text-white w-4/5 mx-auto mt-14 font-bold'>The Covid 19 Epidemic In 2022 Is Back</h2>
            </div>
            <div className='w-[250px] h-[350px] bg-[url(/images/blog2-450x580.jpg.png)] mt-36 rounded-xl relative' style={{backgroundSize: '100% 100%'}}>
                <div className='bg-indigo-800 text-white px-6 py-1 rounded-r-full absolute top-4 -left-3 text-sm'>17 MAR</div>
                <h2 className='text-white w-4/5 mx-auto mt-14 font-bold'>The Covid 19 Epidemic In 2022 Is Back</h2>
            </div>
        </div>
    </div>
  )
}

export default News