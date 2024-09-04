import { useSelector } from "react-redux"
import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"


const Container = () => {
  const showSideBar = useSelector((store)=> store.app.showSideBar)

  return (
    showSideBar ? (  <>
    <div className=" ml-48 w-[85dvw]">
    <ButtonList/>
    <VideoContainer/>
</div>
    </>
) : (

  <>
   <div className="w-full">
    <ButtonList/>
    <VideoContainer/>
</div>
  </>
)
  ) 

}

export default Container