import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Body = () => {

  return (
    <>
    <Header/>
    <div className=" flex mt-16 bg-black min-[200px]:text-xs min-[400px]:text-sm text-base">
   <SideBar/>
   <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Body