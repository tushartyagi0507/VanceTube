import store from "../Store/store"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Provider } from "react-redux"

function App() {
  
  return (
  
    <Provider store={store}>
        <div className="">
     <Header/>
     <Body/>
     <Footer/>
     </div>
    </Provider>
    
  )
}

export default App
