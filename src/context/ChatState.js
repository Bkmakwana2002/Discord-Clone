import React from 'react'
import ChatContext from './ChatContext'
import { useState } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

const ChatState = (props) => {
 
  const chatInitialState = []
  const [Chats, setChat] = useState(chatInitialState) 
  const chatRef = collection(db,"Chats")

  const getChats = async()=>{
    const data = await getDocs(chatRef)
    setChat(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  return (
    <ChatContext.Provider value={{Chats,getChats}}>
       {props.children}
    </ChatContext.Provider>
  )
}

export default ChatState