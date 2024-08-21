import { Button } from "./Button";

const ButtonList = () => {
 const BUTTON_LISTS = ["All","Trending","News", "Live","Sports", "Music", "Game", "Tech","Education","Entertainment","Funny","Cricket","Football","International",];
  
  return (
    <div className="flex gap-4 overflow-auto ml-4 mt-3 scrollbar">
     { BUTTON_LISTS.map((btn, index)=> <Button key={index} name={btn}/>)}
    </div>
  )
}

export default ButtonList