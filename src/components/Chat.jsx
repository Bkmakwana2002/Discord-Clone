import { BellIcon, ChatIcon, EmojiHappyIcon, GiftIcon, HashtagIcon, InboxIcon, PlusCircleIcon, QuestionMarkCircleIcon, SearchIcon, UsersIcon } from '@heroicons/react/solid'
import React, { useContext, useRef, useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useParams } from 'react-router-dom'
import { auth, db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'
import chatContext from '../context/ChatContext'

const Chat = ({ Channels }) => {

  const context = useContext(chatContext)
  const { getChats, Chats } = context

  const [user] = useAuthState(auth)
  const { id } = useParams()
  const inputRef = useRef('')
  const chatRef = collection(db, "Chats")
  const scrollRef = useRef(null)

  const scrollToBottom = () => {
    scrollRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (inputRef.current.value != "") {
      await addDoc(chatRef, { chat: inputRef.current.value, name: user.displayName, img: user.photoURL })
    }
    inputRef.current.value = ""
    scrollToBottom()
  }

  useEffect(() => {
    getChats()
  }, [])


  return (
    <div className='flex flex-col h-screen'>
      <header className='flex items-center justify-between space-x-5 border-b border-gray-800 p-4 -mt-1'>
        <div className='flex items-center space-x-1'>
          <HashtagIcon className='h-6 text-[#72767d]' />
          {
            Channels.map(item => {
              return (
                <React.Fragment key={item.id} className>
                  {item.id === id &&
                    <h4 className='text-white'>{item.channelName}</h4>
                  }
                </React.Fragment>
              )
            })
          }
        </div>
        <div className='flex space-x-3'>
          <BellIcon className="h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <ChatIcon className='h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]' />
          <UsersIcon className='h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]' />
          <div className='flex bg-[#202225] text-xs p-1 rounded-md'>
            <input type="text" placeholder='Search' className='bg-transparent focus:outline-none text-white pl-1 placeholder-[#72767d]' />
            <SearchIcon className='h-4 text-[#72767d] mr-1' />
          </div>
          <InboxIcon className="h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
          <QuestionMarkCircleIcon className="h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
        </div>
      </header>

      <main className='flex-grow overflow-y-scroll scrollbar-hide'>
        <div className='p-6'>
        {
          Chats.map(chat => {
            return (
              <div key={chat.id} className='flex h-12 gap-8 w-full m-5 items-center hover:bg-[#40444b] transition duration-200 rounded-xl p-3'>
                <img src={chat.img} alt="" className='rounded-full ml-2 h-9'/>
                <h4 className='text-white'>{chat.chat}</h4>
              </div>
            )
          })
        }
        </div>
        <div ref={scrollRef} className='pb-16' />
      </main>

      <div className='flex items-center p-2.5 bg-[#40444b] mx-5 mb-7 rounded-lg'>
        <PlusCircleIcon className="h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde] mr-4" />
        <form className='flex-grow'>
          {
            Channels.map(item => {
              return (
                <React.Fragment key={item.id} className>
                  {item.id === id &&
                    <input type="text" disabled={!id} placeholder={id ? `Message #${item.channelName}` : 'Select a Channel'} className=' bg-transparent focus:outline-none text-[#dcddde] lg:w-[1200px] md:w-[500px] placeholder-[#72767d] text-sm' ref={inputRef} />
                  }
                </React.Fragment>
              )
            })
          }
          <button hidden type='submit' onClick={sendMessage}>
            Send
          </button>
        </form>
        <GiftIcon className='h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde] mr-2' />
        <EmojiHappyIcon className='h-6 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde] mr-4' />
      </div>
    </div>
  )
}

export default Chat