import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"


const Body = () => {
  return (
    <div className="w-screen flex mt-16">
     <SideBar/>
     <Outlet/>
    </div>
  )
}

export default Body