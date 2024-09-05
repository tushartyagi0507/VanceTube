import { Outlet } from "react-router-dom"
import SideBar from "./SideBar"
import Header from "../Header/Header"
import Footer from "../Footer/Footer"

const Body = () => {

  return (
    <>
    <Header/>
    <div className="scrollbar flex mt-16 bg-black">
   <SideBar/>
   <Outlet/>
    </div>
    <Footer/>
    </>
  )
}

export default Body