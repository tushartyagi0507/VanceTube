
import { useDispatch, useSelector } from "react-redux";
import SideBarFixed from "./SideBarFixed";
// import { loadQueryVideos } from "../utils/Store/mainVideoSlice";

const SideBar = () => {
  const sidebarStatus = useSelector((store) => store.app.showSideBar);
  // const dispatch = useDispatch();
  // const videos = useSelector((store) => store.allVideos.homeVideos);
  // const queryVideo = useSelector((store) => store.allVideos.queryVideos);
  // const smallDevice = useSelector((store) => store.appConfig.smallDevice);

  const handleClick = () => {
    console.log("home clicked");
    // console.log("fetched videos form home", videos[0]);
    // // dispatch(loadQueryVideos(videos));
    // console.log("query videos after update", queryVideo[0]);
  };

  //console.log(("sidebarStatus",sidebarStatus.sideBar));
  return (
    <>
      {sidebarStatus 
      ?
       (
        <div className="sideBar w-60 p-8 shadow-lg h-auto bg-white z-0 pt-6 left-0 sticky">
         <SideBarFixed/>

          <h1 className="pt-4 font-bold text-md">Explore</h1>
          <ul>
            <li className="py-1  cursor-pointer flex items-center">Trending</li>
            <li className="py-1 cursor-pointer flex items-center">Live</li>
            <li className="py-1 cursor-pointer flex items-center">Sports</li>
            <li className="py-1 cursor-pointer flex items-center">Music</li>
            <li className="py-1 cursor-pointer flex items-center">Gaming</li>
          </ul>

          <h1 className="pt-4 font-bold text-md">You › </h1>
          <ul>
            <li className="py-1 cursor-pointer flex items-center">
              Your Channel
            </li>
            <li className="py-1 cursor-pointer flex items-center">History</li>
            <li className="py-1 cursor-pointer flex items-center">
              Your Video
            </li>
            <li className="py-1 cursor-pointer flex items-center">
              Watch later
            </li>
            <li className="py-1 cursor-pointer flex items-center">Downloads</li>
            <li className="py-1 cursor-pointer flex items-center">
              Your clips
            </li>
          </ul>

          <h1 className="pt-4 font-bold text-md">Watch Later</h1>
          <ul>
            <li className="py-1  cursor-pointer flex items-center">Music</li>
            <li className="py-1 cursor-pointer flex items-center">Sports</li>
            <li className="py-1 cursor-pointer flex items-center">Gaming</li>
          </ul>
        </div>
      ): 
      (<div className="px-5 w-fit shadow-lg h-screen pt-6">
        <SideBarFixed/>
      </div>)}
    </>
  );
};

export default SideBar;
