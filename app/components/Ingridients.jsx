import React from 'react'

const Ingridients = () => {
  return (
    <div className='my-12 w-full max-w-[1185px] mx-auto max-lg:px-6'>
        <div className='flex items-center gap-4 max-lg:flex-col'>
            <div className='flex flex-col gap-4 w-2/5 max-lg:w-1/2 max-sm:w-full max-lg:mb-4'>
                <p className='text-[#004958] font-bold'>INGRIDIENTS</p>
                <p className='text-[#004958] text-5xl font-bold'>Better Ingridients</p>
                <p className='text-slate-500 font-semibold mt-4'>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
            </div>
            <div className='bg-[url(/images/h2-b1.jpg.png)] flex flex-col gap-2 p-8 w-[330px] h-[250px] rounded-xl overflow-hidden' style={{backgroundSize: '100% 100%'}}>
                <p className='text-[#004958] font-bold text-xl'>Vitamin C</p>
                <p className='text-slate-500 font-semibold'>Vitamin C as ascorbic acid</p>
                <button className='text-[#004958] underline justify-self-end mt-auto w-1/3 font-bold'>SEE MORE</button>
            </div>
            <div className='bg-[url(/images/bn2-2.jpg.png)] flex flex-col gap-2 p-8 w-[330px] h-[250px] rounded-xl overflow-hidden' style={{backgroundSize: '100% 100%'}}>
                <p className='text-[#004958] font-bold text-xl'>Vitamin C</p>
                <p className='text-slate-500 font-semibold'>Vitamin C as ascorbic acid</p>
                <button className='text-[#004958] underline justify-self-end mt-auto w-1/3 font-bold'>SEE MORE</button>
            </div>
        </div>
        <div className='flex items-center gap-4 mt-4 max-lg:flex-col'>
            <div className='bg-[url(/images/bn2-3.jpg.png)] flex flex-col gap-2 p-8 w-[330px] h-[250px] rounded-xl overflow-hidden' style={{backgroundSize: '100% 100%'}}>
                <p className='text-[#004958] font-bold text-xl'>Magnesium</p>
                <p className='text-slate-500 font-semibold w-3/4'>Boost energy and support muscle function</p>
                <button className='text-[#004958] underline justify-self-end mt-auto w-1/3 font-bold'>SEE MORE</button>
            </div>
            <div className='bg-[url(/images/bn2-4.jpg.png)] flex flex-col gap-2 p-8 w-[330px] h-[250px] rounded-xl overflow-hidden' style={{backgroundSize: '100% 100%'}}>
                <p className='text-[#004958] font-bold text-xl'>Hyaluronic Acid</p>
                <p className='text-slate-500 font-semibold w-3/5'>For smooth, supple and soft skin!</p>
                <button className='text-[#004958] underline justify-self-end mt-auto w-1/3 font-bold'>SEE MORE</button>
            </div>
            <div className='bg-[url(/images/bn2-5.jpg.png)] flex flex-col gap-2 p-8 w-[330px] h-[250px] rounded-xl overflow-hidden' style={{backgroundSize: '100% 100%'}}>
                <p className='text-[#004958] font-bold text-lg'>Lactobacillus</p>
                <p className='text-slate-500 font-semibold w-3/5'>Invigorate your gut microbiome</p>
                <button className='text-[#004958] underline justify-self-end mt-auto w-1/3 font-bold'>SEE MORE</button>
            </div>
            <div className='flex flex-col gap-4 max-lg:hidden'>
                <div className='bg-sky-300 rounded-br-full h-[120px] w-[110px]'></div>
                <div className='w-[100px] h-[100px] rounded-full bg-yellow-400'></div>
            </div>
        </div>
    </div>
  )
}

export default Ingridients