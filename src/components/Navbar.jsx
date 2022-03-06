import React from 'react'
import { MenuIcon } from '@heroicons/react/outline'
import { useAuthState } from 'react-firebase-hooks/auth';
import {signIn,auth} from '../firebase'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  let navigate = useNavigate()
  const [user] = useAuthState(auth)

  return (
    <header className='flex items-center justify-around py-4 px-6 bg-discord_blue'>
        <a href="/">
          <img src="/images/logo.svg" alt="img" className='w-32 h-12 object-contain'/>
        </a>
        <div className='hidden lg:flex space-x-6 text-white'>
          <a href="/" className='lg:hidden link'>Home</a>
          <a href="/" className='link'>Download</a>
          <a href="/" className='link'>Nitro</a>
          <a href="/" className='link'>Safety</a>
          <a href="/" className='link'>Mod Academy</a>
          <a href="/" className='link'>Support</a>
          <a href="/" className='link'>Blog</a>
          <a href="/" className='link'>Careers</a>
        </div>
        <div className='flex space-x-4'>
            <button className='bg-white py-2 rounded-full text-xs md:text-sm px-7 focus:outline-none hover:shadow-2xl hover:text-discord_blurple transition duration-200 ease-in-out whitespace-nowrap font-medium' onClick={!user ? signIn : ()=>navigate('/channels')}>
              {!user ? "Login" : "Open Discord"} 
            </button>
            <MenuIcon className='text-white h-10 lg:hidden md:h-14'/>
        </div>
    </header>
  )
}

export default Navbar