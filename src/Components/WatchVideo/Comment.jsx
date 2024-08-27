import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser } from "@fortawesome/free-regular-svg-icons"
import { useState } from "react"


const Comment = ({comment}) => {
 const {content, votes: likes, timestamp, replies, name} = comment

 const [showreplies, setshowreplies ] = useState(true)

  return (
    <div className="w-full px-2 m4-6 bg-gray-100 shadow-lg rounded-lg text-lg p-2 flex gap-3" >
   <FontAwesomeIcon icon={faUser} className="text-lg my-1 items-center"/>
        <div>
        <h3 className="font-bold">{name}</h3>
        <p className=" mt-1 pl-{20%}">{content}</p> 
   <div className="flex gap-5 w-max">
   <p className="">{likes} ♥️,</p>
   <p> on-{new Date(timestamp).toLocaleString()}</p>
   </div>
   
   { replies.length != 0 &&  (
    <button className="text-blue-400 m-1" onClick={()=> setshowreplies(!showreplies)}>{showreplies ? "Hide Replies" : "Show Replies"}</button>
   )
   }

    {showreplies && <div className="ml-[4%] border-l my-4 border-gray-600 w-max pr-6">
           { replies.map((reply)=> <Comment key={reply?.id} comment={reply}/>)}
        </div>}
        </div>
    </div>
  )
}

export default Comment