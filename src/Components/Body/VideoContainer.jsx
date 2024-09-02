import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { Link } from "react-router-dom"


const VideoContainer = () => {

  const [videos, setvideos] = useState([])

  useEffect(()=>{
fetchVideos()
  }, [])

  const fetchVideos = async ()=>{
  try{const data = await fetch(import.meta.env.VITE_Youtube_API)
  const json = await data.json()
  // console.log(json)
  setvideos(json?.items)
}
  catch(err){
console.log(err)
  }
  }
  return (
    <div className="mt-4 flex flex-wrap w-[98%] mx-auto">
 {  videos.map((video)=> (<Link to={"/watch?v="+video?.id} key={video?.id}>
     <VideoCard info={video}/>
  </Link>
  ))
}
    </div>
  )
}

export default VideoContainer