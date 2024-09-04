// import { useEffect } from "react"
// import { ChatMessage } from "./ChatMessage"
// import { generateRandomName, makeRandomMessage } from "../../utils/Helper"
// import { useDispatch, useSelector } from "react-redux"
// import { addMessage } from "../../Store/ChatSlice"


// const LiveChat = () => {
//   const dispatch = useDispatch()
//   const Chat = useSelector(store => store.chat.messages)

//   useEffect(()=>{
//     const i = setInterval(()=>{
//   dispatch(addMessage({
//     name: generateRandomName(),
//     message: makeRandomMessage(10)
//   }))
//     }, 2000)
//     return ()=> clearInterval(i)
//   }
//   ,[])


//   return (
//     <div className="border-2 ml-2 border-black p-2 h-[500px] overflow-y-scroll ">
//     {Chat.map( (c, index)=> <span key={index}> <ChatMessage  name={c.name} message={c.message} /></span>)}
//     </div>
//   )
// }

// export default LiveChat

import { useEffect, useRef, useState } from "react";
import { ChatMessage } from "./ChatMessage";
import { generateRandomName, makeRandomMessage } from "../../utils/Helper";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Store/ChatSlice";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  const chatContainerRef = useRef(null);
  const [text, settext] = useState("")

  // Adding messages to the chat at regular intervals
  useEffect(() => {
    const interval = setInterval(() => {  
      dispatch(addMessage({ name: generateRandomName(), message:  makeRandomMessage(10) }));
    }, 1500);
    return () => clearInterval(interval);
  }, [dispatch]);

  // Scroll to the bottom of the chat container when chat messages update
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleText = (e)=>{
settext(e.target.value)
console.log(text)
  }

  const handleSend = ()=>{
    console.log("sent")
    dispatch(addMessage({
      name: "Tushar Tyagi",
      message: text,
    })
  )
  settext("")
  }

  return (
    <div
      ref={chatContainerRef}
      className="border-2 ml-2 border-[#333] bg-[#212121] p-2 h-[500px] overflow-y-auto flex flex-col-reverse 
      overflow-x-hidden relative"
    >

<div className=" bottom-2 flex w-full mx-auto gap-2 my-auto h-12 absolute">
        <input type="text" placeholder="type a message" className=" w-[75%] h-10 px-4 py-2 bg-[#121212] border-2 border-[#444] rounded-l-lg text-white focus:outline-none" value={text}
        onChange={handleText} onKeyDown={(e)=> {if(e.key == "Enter") handleSend()}}
        />
        <button className="px-2 h-10 bg-[#065fd4]" onClick={handleSend}>Send</button>
      </div>


{chatMessages.map((c, index) => (
        <div key={index} >
          <ChatMessage name={c.name} message={c.message} />
        </div>
      ))}


    </div>
  );
};

export default LiveChat;


