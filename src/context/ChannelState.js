import React from 'react'
import channelContext from './ChannelContext'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs, addDoc } from 'firebase/firestore'

const ChannelState = (props) => {

   const channelIntitialState = []
   const [Channels, setChannels] = useState(channelIntitialState)
   const ref = collection(db, "Channel")

    const getChannels = async () => {
        const data = await getDocs(ref)
        setChannels(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }

    const addChannel = async (channelName)=>{
       await addDoc(ref, { channelName: channelName })
    }

  return (
    <channelContext.Provider value={{Channels,getChannels,addChannel}}>
        {props.children}
    </channelContext.Provider>
  )
}

export default ChannelState