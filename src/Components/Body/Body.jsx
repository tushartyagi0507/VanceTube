import Container from "./Container"
import SideBar from "./SideBar"


const Body = () => {
  return (
    <div className="w-screen flex">
     <SideBar/>
     <Container/>
    </div>
  )
}

export default Body