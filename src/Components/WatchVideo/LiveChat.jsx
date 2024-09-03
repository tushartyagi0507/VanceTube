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
      className="border-2 ml-2 border-black p-2 h-[500px] overflow-y-auto flex flex-col-reverse bg-slate-200 
      overflow-x-hidden"
    >

<div className=" bottom-2 flex w-full mx-[3%] gap-2 mt-2">
        <input type="text" placeholder="type a message" className="w-[75%] px-2" value={text}
        onChange={handleText} onKeyDown={(e)=> {if(e.key == "Enter") handleSend()}}
        />
        <button className="py-1 px-2 bg-blue-300" onClick={handleSend}>Send</button>
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


