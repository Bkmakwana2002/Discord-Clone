import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import ServerIcon from './ServerIcon'
import { PlusIcon, ChevronDownIcon, ChevronDoubleDownIcon, MicrophoneIcon, PhoneIcon, CogIcon } from '@heroicons/react/outline'
import { useEffect, useState,useContext } from 'react'
import ChannelDisplay from './ChannelDisplay'
import Chat from './Chat'
import channelContext from '../context/ChannelContext'
import { collection,addDoc } from 'firebase/firestore'

const Home = () => {
   
    const ref = collection(db, "Channel")
    const context = useContext(channelContext)
    const { getChannels,Channels } = context
    const [user] = useAuthState(auth)
    let navigate = useNavigate()

    const redirect = () => {
        navigate('/')
    }

    useEffect(() => {
      getChannels()
    }, [])
    

    const handleAddChannel = async () => {
        const channelName = prompt("Enter a new Channel Name")
        await addDoc(ref, { channelName: channelName })
    }



    return (
        <>
            {!user && redirect()}
            <div className='flex h-screen'>
                <div className='flex flex-col space-y-3 bg-[#202225] p-3 min-w-max'>
                    <div className='server-default hover:bg-discord_purple bg-discord_serverBg h-12  rounded-full flex justify-center items-center cursor-pointer hover:rounded-2xl transition-all duration-200 ease-in-out'>
                        <img src="/images/Discord-Logo-White.svg" alt="img" className='h-5' />
                    </div>
                    <hr className='border-gray-700 mx-auto w-8' />
                    <ServerIcon image="/images/server1.svg" />
                    <ServerIcon image="/images/server2.svg" />
                    <ServerIcon image="/images/server3.svg" />
                    <ServerIcon image="/images/server4.svg" />
                    <div className='bg-discord_serverBg h-12  rounded-full flex justify-center items-center cursor-pointer hover:rounded-2xl transition-all duration-200 ease-in-out hover:bg-discord_green group'>
                        <PlusIcon className='text-discord_green h-7 group-hover:text-white' />
                    </div>
                </div>
                <div className='bg-[#2f3136] flex  flex-col min-w-max'>
                    <h2 className='flex text-white font-bold text-sm items-center border-b border-gray-800 p-4 hover:bg-[#34373c] cursor-pointer'>Official BKM Server ..<ChevronDownIcon className='h-5 ml-2' /></h2>
                    <div className='text-[#8e9297] flex-grow overflow-y-scroll scrollbar-hide'>
                        <div className='flex items-center p-2 mb-2'>
                            <ChevronDownIcon className='h-3 mr-2 ' />
                            <h4 className='font-semibold'>Channels</h4>
                            <PlusIcon className='h-6 ml-auto cursor-pointer hover:text-white' onClick={handleAddChannel} />
                        </div>
                        <div className='flex flex-col space-y-2 mb-4'>
                            {
                                Channels.map((user) => {
                                    return <div>
                                        <ChannelDisplay channelName={user.channelName} id={user.id}/>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className='bg-[#292b2f] p-2 flex justify-between space-x-8 items-center'>
                        <div className='flex items-center space-x-1'>
                            <img src={user?.photoURL} alt="img" className='h-10 rounded-full'
                            onClick={()=>auth.signOut()}/>
                            <h4 className='text-white text-xs font-medium'>
                                {user?.displayName}
                                <span className='text-[#b9bbbe] block'>
                                    #{user?.uid.substring(0,4)}
                                </span>
                            </h4>
                        </div>
                        <div className='text-gray-400 flex items-center'>
                            <div className='hover:bg-[#3a3c43] p-2 rounded-md'>
                                <MicrophoneIcon className='h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]'/>
                            </div>
                            <div className='hover:bg-[#3a3c43] p-2 rounded-md'>
                                <PhoneIcon className='h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]'/>
                            </div>
                            <div className='hover:bg-[#3a3c43] p-2 rounded-md'>
                                <CogIcon className='h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]'/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-[#36393f] flex-grow'>
                    <Chat Channels= {Channels}/>
                </div>
            </div>
        </>
    )
}

export default Home