import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"

const Body = () => {

  return (
    <div className="w-full flex mt-16 bg-black">
   <SideBar/>
   <Outlet/>
    </div>
  )
}

export default Body