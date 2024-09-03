import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUser} from "@fortawesome/free-solid-svg-icons";


export const ChatMessage = ({name, message}) => {
  return (
    <div className="flex items-center my-2">
     <FontAwesomeIcon icon={faUser} className="h-5" />
     <span className="mx-2 font-bold">{name}: </span>
     <span>{message}</span>
    </div>
  )
}
