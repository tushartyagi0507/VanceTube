import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"



const VideoContainer = () => {

  const [videos, setvideos] = useState([])
  const [isShowLoading, setisShowLoading] = useState(true)
  const [nextPageToken, setnextPageToken] = useState("")

  useEffect(()=> {
 fetchVideos()
//  console.log(videos)
  }, [])

  useEffect(()=>{
    const handleScroll = ()=>{
      if( document.documentElement.scrollTop + document.documentElement.clientHeight + 1 >= document.documentElement.scrollHeight)
        {
        // console.log(nextPageToken)
        setisShowLoading(true)
        fetchVideos(nextPageToken)
      }
    }

  window.addEventListener("scroll", handleScroll)
return ()=> window.removeEventListener("scroll", handleScroll)
  }, [nextPageToken, isShowLoading])

  const fetchVideos = async (pageToken = "")=>{
  try{const data = await fetch(import.meta.env.VITE_Youtube_API+pageToken)
  const json = await data.json()
  // console.log(json)
  setnextPageToken(json?.nextPageToken)
  setvideos((prev)=> [...prev, ...json.items])
  setisShowLoading(false)
}
  catch(err){
console.log(err)
  }

  }
  return (
    <div className="mt-4 flex flex-wrap mx-auto ">
 {  videos.map((video, index)=> (<Link to={"/watch?v="+video?.id} key={index} className="md:w-1/4 sm:h-1/5">
     <VideoCard info={video}/>
  </Link>
  ))
}

{isShowLoading && (
        <div className="w-full flex justify-center items-center min-h-screen">
          <h1 className="text-2xl text-gray-400 font-bold">Loading...</h1>
        </div>
      )}
    </div>
  )
}

export default VideoContainer