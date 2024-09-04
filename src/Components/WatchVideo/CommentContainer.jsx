// import { useEffect, useState } from "react";
// import { data } from "../../utils/Constants";
// import CommentDemo from "./CommentDemo";
// // import Comment from "./Comment"

// const CommentsContainer = () => {
//   const [commentText, setcommentText] = useState("");
//   const [refreshData, setrefreshData]= useState(data)
//   const [loadData, setloadData] = useState([])

//   useEffect(()=>{
// setloadData(refreshData)
//   }, refreshData)


//   const addComment = (commentText, data) => {
//     if (commentText != "") {
//         const maxId = data.reduce((item, max)=>{ return (item.id > max.id ? item.id : max.id)})
//       const newComment = {
//         "id": maxId + 1,
//         "name": "User",
//         "content": commentText,
//         "vote": 0,
//         "timestamp": "just now",
//         "replies": [ ],
//       };
  
//       // Add the new comment to the beginning of the array
//       const updatedData = [newComment, ...data];
//       // Update the state
//       console.log(updatedData)
//       setrefreshData(updatedData);
  
//       console.log("chala");
//       setcommentText(" ")
//     }
//   };
  
// console.log(refreshData)
//   return (
//     <div>
//       <div className="flex items-center">
//         <textarea
//           value={commentText}
//           placeholder="Add a comment.."
//           className="mt-6 bg-slate-100 
//        w-[90%] p-2"
//           rows="2"
//           cols="20"
//           onChange={(e) => setcommentText(e.target.value)}
//         />
//         <button className="py-1 px-2 text-lg ml-2 bg-blue-600 text-white h-8 self-center" onClick={()=>{addComment(commentText, refreshData)}}>
//           Add
//         </button>
//       </div>

//       <div className="my-6">
//         <h1 className="font-bold text-2xl px-6">Comments:</h1>
//         <div>
//           {loadData.map((comment) => {
//             return (
//               // <Comment key={comment?.id} comment ={comment}/>
//               <CommentDemo key={comment?.id} comment={comment} />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommentsContainer;


import { data } from "../../utils/Constants"
import Comment from "./Comment"

const CommentsContainer = () => {
  return (
    <div className="my-6 bg-gray-800">
     <h1 className="font-bold text-2xl px-6">Comments:</h1>
     <div>
      { data.map(
        (comment)=> {
            return (
                
                <Comment key={comment?.id} comment ={comment}/>
            )
        }
       )}
     </div>
    </div>
 )
}

export default CommentsContainer