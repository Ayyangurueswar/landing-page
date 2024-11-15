import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <div className='w-full bg-blue-100 rounded-tl-[20%] py-24 px-16 flex flex-col gap-32'>
        <div className='flex items-center max-lg:flex-col max-lg:gap-5 justify-between w-full max-w-[1185px] mx-auto'>
            <Image src='/images/Picture-4-1.png.png' alt='' width={600} height={700} className='sm:h-[550px] h-[300px]'/>
            <div className='flex flex-col gap-6 w-2/5 max-lg:w-full'>
                <h2 className='text-[#004958] font-bold'>ABOUT EVE PHARMACY</h2>
                <p className='text-5xl text-[#004958] font-bold sm:w-3/5 w-full max-sm:text-4xl'>Supercharge Your Health</p>
                <p className='text-slate-500'>Adjacent to the Elbrit Health Center, Eve&apos;s Pharmacy brings you the best in medicines and healthcare products at an accessible location - with a wide range of choices including products made right here in India!</p>
                <p className='text-slate-500'>When you shop at Eve Pharmacy, you can trust in our quality - we apply the highest levels of quality checks on all our medical and non-medical products. Visit our pharmacy today, for all healthcare needs!</p>
                <p className='font-semibold sm:w-3/4 w-full text-lg mt-3'>We offer choice, reliability and value That&apos;s what makes us better</p>
                <button className='bg-[#004958] text-white font-semibold py-4 px-6 sm:w-2/5 w-full rounded-full'>ABOUT US</button>
            </div>
        </div>
        <div className='flex items-center justify-between w-full max-w-[1185px] mx-auto max-lg:flex-col max-lg:gap-5'>
            <div className='flex flex-col gap-4 w-2/5 max-lg:w-full'>
                <div className='bg-yellow-500 w-10 h-10 rounded-tl-2xl rounded-br-2xl'></div>
                <h2 className='text-[#004958] font-bold'>SPECIAL SERVICE</h2>
                <p className='text-5xl text-[#004958] font-bold sm:w-3/5 w-full max-sm:text-4xl'>Feel Better Or Your Money Back</p>
                <p className='text-slate-500 my-3'> With our commitment to providing safe and effective medical and healthcare products, you can rest assured when you buy from Eve Pharmacy</p>
                <p className='text-[#004958] font-bold text-xl'>A full 60 days money back guarantee, no questions asked.</p>
                <button className='text-[#004958] bg-white border-[#004958] border font-semibold mt-4 py-4 px-6 sm:w-2/5 w-full rounded-full'>EXPLORE NOW</button>
            </div>
            <Image src='/images/Picture5.png.png' alt='' width={650} height={800}/>
        </div>
        <div className='flex items-center justify-between w-full max-w-[1185px] mx-auto max-lg:flex-col max-lg:gap-5'>
            <div className='flex'>
                <div className='sm:w-64 sm:h-64 w-48 h-48 rounded-full bg-sky-300 flex justify-between items-center z-10'>
                    <div className='w-5 h-5 rounded-full bg-[#8da8d0] -ml-2'></div>
                    <Image src='/images/product-3.png.png' alt='' width={700} height={700} className='sm:w-[220px] sm:h-[280px] w-[200px] h-[220px] -mt-8 ml-4'/>
                    <div className='w-5 h-5 rounded-full bg-[#8da8d0] -mr-2'></div>   
                </div>
                <div className='flex flex-col gap-6 -ml-6 mt-6'>
                    <div className='bg-yellow-400 text-white text-center rounded-tl-3xl rounded-br-3xl ml-16 py-4 font-bold text-xl w-[28%]'>
                        -15%
                    </div>
                    <div className='bg-white px-6 sm:py-14 py-7 rounded-3xl flex flex-col gap-4'>
                        <p className='font-bold text-[#004958]'>Lauder Idealist Pore Minimizing</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" fill="none">
                        <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#fcff39"/>
                        </svg>
                        <p className='font-bold'>2 reviews</p>
                        <button className='underline text-[#004958] sm:w-1/2 w-full text-left font-bold'>ALL REVIEWS</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-4 w-1/2 max-lg:w-full'>
                <h2 className='text-[#004958] font-bold'>BEST OFFERS</h2>
                <p className='text-5xl text-[#004958] font-bold sm:w-3/5 w-full max-sm:text-4xl'>Start Feeling Better</p>
                <p className='text-slate-500 my-3'>Don&apos;t wait - get the right medicine and the right time. Our shelves are stocked and ready to fulfil your needs so that you can start feeling better today!</p>
                <button className='bg-[#004958] text-white font-semibold py-4 px-6 sm:w-2/5 w-full rounded-full'>BUY NOW</button>
            </div>
        </div>
    </div>
  )
}

export default About