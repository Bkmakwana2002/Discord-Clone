import { DownloadIcon } from '@heroicons/react/outline'
import React from 'react'

const Hero = () => {
    return (
        <div className='bg-discord_blue pb-8 md:pb-0'>
            <div className='p-7 py-9 h-screen md:h-[66vh] lg:h-[83vh] md:flex relative'>
                <div className='flex flex-col gap-7 md:max-w-md lg:max-w-none lg:justify-center'>
                    <h1 className='text-3xl text-white font-extrabold'>IMAGINE A PLACE...</h1>
                    <h2 className='text-white text-lg font-light tracking-wide lg:max-w-3xl w-full'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                    </h2>
                    <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6'>
                        <button className='bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:text-discord_blurple hover:shadow-2xl outline-none transition duration-200 ease-in-out'>
                            <DownloadIcon className='h-6' />
                            Download for Linux
                        </button>
                        <button className='bg-gray-900 text-white w-80 font-medium flex justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>Open Discord in your browser</button>
                    </div>
                </div>
                <div className='flex-grow justify-around items-center'>
                   <img src="/images/img1.svg" alt="img" className='absolute right-9 sm:left-auto md:hidden mt-2 '/>
                   <img src="/images/img2.svg" alt="img" className='hidden md:inline absolute w-3/4 h-3/4 lg:order-1' />
                </div>
            </div>
        </div>
    )
}

export default Hero