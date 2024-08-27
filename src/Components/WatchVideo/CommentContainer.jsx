import { data } from "../../utils/Constants"
import Comment from "./Comment"

const CommentsContainer = () => {
  return (
    <div className="my-6">
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