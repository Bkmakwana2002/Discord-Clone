import React from 'react'
import { HashtagIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'

const ChannelDisplay = ({id,channelName}) => {
  
  const navigate = useNavigate()

  const setChannel = ()=>{
      
    navigate(`/channels/${id}`)
  }

  return (
    <div className='font-medium flex items-center cursor-pointer hover:bg-[#3a3c43] p-1 rounded-md hover:text-white'onClick={setChannel}>
      <HashtagIcon className='h-5 mr-2'/> {channelName}
    </div>
  )
}

export default ChannelDisplay