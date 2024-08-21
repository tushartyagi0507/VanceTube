import { useEffect, useState } from "react"
import VideoCard from "./VideoCard"


const VideoContainer = () => {

  const [videos, setvideos] = useState([])

  useEffect(()=>{
fetchVideos()
  }, [])

  const fetchVideos = async ()=>{
  try{const data = await fetch(import.meta.env.VITE_Youtube_API)
  const json = await data.json()
  console.log(json)
  setvideos(json?.items)
}
  catch(err){
console.log(err)
  }
  }
  return (
    <div className="mt-6 flex flex-wrap w-[98%] mx-auto">
 {  videos.map((video)=> <VideoCard key={video?.id} info={video}/>)}
    </div>
  )
}

export default VideoContainer