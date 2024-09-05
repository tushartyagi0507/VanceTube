import { useSelector } from "react-redux";


/* eslint-disable react/prop-types */
const SearchVideos = (props) => {
  const isSidebarShow = useSelector((store) => store.app.showSideBar);
  const {info} = props
  // console.log(info)
  if(info === null || info === undefined) return
  const { snippet, statistics} = info;
  let { thumbnails, title, channelTitle } = snippet;
  return (
 
      <div
      className={`p-2 m-2 ${
        isSidebarShow ? "sm:w-[20vw] lg:w-[20vw]" : "sm:w-[88vw] lg:w-[18vw]"
      } cursor-pointer bg-black text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 
      sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[20vw]`}
    >
      <img
        className="rounded-lg w-full h-auto object-cover"
        alt="thumbnail"
        src={thumbnails.medium.url}
      />
      <div className="mt-2">
        <h3 className="text-base font-semibold line-clamp-2">{title}</h3>
        <p className="text-sm text-gray-400">{channelTitle}</p>
      </div>
    </div>
 
  )
}

export default SearchVideos