import { RouterProvider, createBrowserRouter } from "react-router-dom"
import store from "../Store/store"
import Body from "./Body/Body"
import { Provider } from "react-redux"
import Container from "./Body/Container"
import Watch from "./WatchVideo/Watch"
import SearchedResult from "./Search/SearchedResult"


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
    }, 
    {
      path: "/search/:query",
     element: <SearchedResult/>
    }
  ]
  },
   
  
])
  
  return (
    <Provider store={store}>
 <div className="">
 <RouterProvider router={router}/>
 </div>
    </Provider>
    
  )
}

export default App
