import React from 'react'
import Image from 'next/image'
import {galleryImages} from '../lib/gallery'
import NewsLetter from './NewsLetter'

const Footer = () => {
  return (
    <div className='w-full bg-[#004985] relative'>
        <NewsLetter />
        <div className='w-full max-w-[1185px] mx-auto mt-96'>
            <div className='flex items-center justify-between pt-56'>
                <div className='flex items-center gap-10 justify-center bg-[#216dab] rounded-xl py-2 w-[30%]'>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fcfcfc" height="64px" width="64px" version="1.1" id="Icons" viewBox="0 0 32 32" xmlSpace="preserve" stroke="#fcfcfc">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier"><g><path d="M29,17h-5.4c-1.8,0-3.2-1.5-3.2-3.3c0-0.3,0-0.7-1.1-0.7h-6.6c-1.1,0-1.1,0.4-1.1,0.7c0,1.8-1.4,3.3-3.2,3.3H3 c-0.6,0-1-0.4-1-1c0-5,3.9-9,8.6-9h10.8c4.7,0,8.6,4,8.6,9C30,16.6,29.6,17,29,17z"/> </g> <path d="M23.6,19c-2.4,0-4.5-1.7-5.1-4h-5.2c-0.6,2.3-2.6,4-5.1,4h-1C6.1,21.4,5,24.4,5,27c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1 c0-2.6-1.1-5.6-2.3-8H23.6z M16,25c-2.2,0-4-1.8-4-4s1.8-4,4-4s4,1.8,4,4S18.2,25,16,25z"/> <path d="M23,30c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C24,29.6,23.6,30,23,30z"/> <path d="M9,30c-0.6,0-1-0.4-1-1v-2c0-0.6,0.4-1,1-1s1,0.4,1,1v2C10,29.6,9.6,30,9,30z"/> </g>
                </svg>
                <div className='text-white'>
                    <p>Phone number</p>
                    <p className='font-semibold'>+974 3118 1843</p>
                </div>
                </div>
                <div className='flex items-center gap-10 justify-center bg-[#216dab] rounded-xl py-2 w-[30%]'>
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7" stroke="#fffafa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> <rect x="3" y="5" width="18" height="14" rx="2" stroke="#fffafa" strokeWidth="2" strokeLinecap="round"></rect> </g></svg>
                <div className='text-white'>
                    <p>Email address</p>
                    <p className='font-semibold'>Elbrithcqhr@gmail.com</p>
                </div>
                </div>
                <div className='flex items-center gap-10 justify-center bg-[#216dab] rounded-xl py-2 w-[30%]'>
                <svg width="64px" height="64px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set" transform="translate(-104.000000, -411.000000)" fill="#ffffff"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location"> </path> </g> </g> </g></svg>
                <div className='text-white'>
                    <p>Office Location</p>
                    <p className='font-semibold'>Ambassador Street, Zone 61,</p>
                </div>
                </div>
            </div>
            <div className='flex items-center justify-between py-8'>
                <div className='w-1/4'>
                    <Image src='/images/Outlook-image.png' alt='' width={250} height={300}/>
                    <p className='text-gray-200 text-sm'>Your health, physical and emotional well-being is important to us. We are always by your side and have made it even easier for you to find the necessary vitamins</p>
                    <div className='mt-4 flex items-center gap-4'>
                        <div className='bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center'>
                        <svg fill="#ffffff" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path> </g></svg>
                        </div>
                        <div className='bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center'>
                        <svg width="20px" height="20px" viewBox="0 -2 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#ffffff"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#ffffff]"> </path> </g> </g> </g> </g></svg>
                        </div>
                        <div className='bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center'>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#ffffff"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#ffffff"></path> <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#ffffff"></path> </g></svg>
                        </div>
                        <div className='bg-blue-300 w-8 h-8 rounded-full flex items-center justify-center'>
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#fafafa"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M3.5 12C3.5 7.30558 7.30558 3.5 12 3.5C16.6944 3.5 20.5 7.30558 20.5 12C20.5 16.6944 16.6944 20.5 12 20.5C10.9716 20.5 9.98587 20.3174 9.07345 19.9828C9.64822 18.4359 10.2115 16.8847 10.7517 15.3255C11.326 15.7348 12.0668 16 13 16C14.935 16 16.9749 14.7247 17.4806 12.1961C18.1155 9.02148 15.5728 6 12 6C10.4972 6 9.01887 6.6037 7.91298 7.56243C6.80483 8.52311 6 9.90687 6 11.5C6 12.2746 6.23394 13.1378 6.79149 13.7057C7.17707 14.0919 7.82087 14.0933 8.20711 13.7071C8.59019 13.324 8.59749 12.7074 8.22899 12.3155C7.44315 11.3348 8.47852 9.71907 9.22306 9.07361C9.99585 8.40366 11.0175 8 12 8C14.4272 8 15.8845 9.97852 15.5194 11.8039C15.2165 13.3183 14.065 14 13 14C12.1821 14 11.7416 13.6547 11.4599 13.208C11.6137 12.7237 11.7454 12.2838 11.8387 11.9263C12.0311 11.1886 12.1473 10.3002 11.4839 9.7474C10.9908 9.33644 10.4087 9.42759 10.0528 9.60557C9.39135 9.93629 9 10.7099 9 11.5C9 11.9414 9.06873 12.6253 9.31675 13.3315C8.67824 15.258 7.98579 17.167 7.27924 19.0696C5.00045 17.5449 3.5 14.9477 3.5 12ZM12 1.5C6.20101 1.5 1.5 6.20101 1.5 12C1.5 17.799 6.20101 22.5 12 22.5C17.799 22.5 22.5 17.799 22.5 12C22.5 6.20101 17.799 1.5 12 1.5Z" fill="#ffffff"></path> </g></svg>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-white text-lg -ml-4'>Community</p>
                    <ul className='mt-10 text-white list-disc space-y-2'>
                        <li>Help Center</li>
                        <li>Publishers</li>
                        <li>Affliates</li>
                        <li>Blog</li>
                        <li>Carrers</li>
                    </ul>
                </div>
                <div>
                    <p className='font-bold text-white text-lg'>Galleries</p>
                    <div className='mt-10 grid grid-cols-3 gap-2'>
                        {
                            galleryImages.map((img, i) => (
                                <Image src={img} key={i} alt='' width={70} height={70}/>
                            ))
                        }
                    </div>
                </div>
                <div>
                    <p className='font-bold text-white text-lg -ml-4'>About Us</p>
                    <ul className='mt-10 text-white list-disc space-y-2'>
                        <li>Contact Us</li>
                        <li>How It Works</li>
                        <li>Create</li>
                        <li>Explore</li>
                        <li>Terms & Services</li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-between py-6 border-t-2 border-white'>
                <div className='flex items-center gap-2'>
                    <svg width="16px" height="16px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"> <g id="Icon-Set" transform="translate(-104.000000, -411.000000)" fill="#ffffff"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location"> </path> </g> </g> </g></svg>
                    <p className='text-gray-200 text-sm'>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
                </div>
                <p className='text-gray-200 text-sm'>&#169; Copyright 2024, ELBRIT</p>
            </div>
        </div>
    </div>
  )
}

export default Footer