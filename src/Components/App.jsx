import { RouterProvider, createBrowserRouter } from "react-router-dom"
import store from "../Store/store"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import { Provider } from "react-redux"
import Container from "./Body/Container"
import Watch from "./WatchVideo/watch"


function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: <Body/>,
    children: [{
      path: "/",
      element: <Container/>
    },
    {
      path: "/watch",
      element: <Watch/>
    }]
  }])
  
  return (
    <Provider store={store}>
        <div className="bg-black text-white">
     <Header/>
    <RouterProvider router={router}/>
     <Footer/>
     </div>
    </Provider>
    
  )
}

export default App
