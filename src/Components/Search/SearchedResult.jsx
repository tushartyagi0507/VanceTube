import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { closeMenu } from "../../Store/appSlice"
import SearchVideos from "./SearchVideos"
import {Link} from "react-router-dom"


const SearchedResult = () => {

  const dispatch = useDispatch()
  const videos = useSelector((store)=> store.result.searchResults)
  // console.log(videos)
  const [results, setresults] = useState([])
  const [isShowLoading, setisShowLoading] = useState(true)

  useEffect(()=>{
  dispatch(closeMenu())
  setresults(videos)
  setisShowLoading(false)
  }, [])



  return (
    <div className=" w-full min-h-screen text-white">
      
          <div className="mt-4 flex flex-wrap mx-auto ">
 {  results.map((video, index)=> (<Link to={"/watch?v="+video?.id?.videoId} key={index} className="md:w-1/4 sm:h-1/5">
     <SearchVideos info={video}/>
  </Link>
  ))
}

{isShowLoading && (
        <div className="w-full flex justify-center items-center min-h-screen">
          <h1 className="text-2xl text-gray-400 font-bold">Loading...</h1>
        </div>
      )}
    </div>
      </div>
  )
}

export default SearchedResult