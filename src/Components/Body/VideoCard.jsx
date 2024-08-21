/* eslint-disable react/prop-types */


const VideoCard = (props) => {
    const {info} = props
    console.log(info)
    if(info === null || info === undefined) return
    const { snippet} = info;
    let { thumbnails, title, channelTitle, publishedAt } = snippet;


  return (
<div className="videocard w-[32%] m-1 rounded-lg shadow-lg p-1 ml-2 border mb-5 cursor-pointer hover:border-b-gray-400 hover:scale-105">
          <img
            className="rounded-md h-44 w-full"
            src={thumbnails?.medium?.url}
            alt="thumbnail"
          />
          <p className="font-bold text-sm p-1">{title}</p>
          <p className="text-sm pt-2 px-1">{channelTitle}</p>
          <p className="text-xs pb-2 px-1">{publishedAt}</p>
        </div>
  )
}

export default VideoCard