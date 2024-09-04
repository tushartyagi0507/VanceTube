
import { useSelector } from "react-redux";
import SideBarFixed from "./SideBarFixed";
import { faBaseball, faFire, faGamepad, faMusic, faTowerBroadcast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  if(!sidebarStatus) null
  //console.log(("sidebarStatus",sidebarStatus.sideBar));
  return (
    <>
      {sidebarStatus 
      &&
       (
        <div className="fixed left-0 top-16 pl-6 mr-2 shadow-lg h-screen bg-black text-white pt-6 text-lg w-fit">
         <SideBarFixed/>

          <h1 className="pt-4 font-bold text-2xl mb-4">Explore</h1>
          <ul >
            <li className="py-1  cursor-pointer flex items-center my-2">
            <FontAwesomeIcon icon={faFire} className="mr-2"/>
              Trending</li>
            <li className="py-1 cursor-pointer flex items-center my-4">
            <FontAwesomeIcon icon={faTowerBroadcast} className="mr-4"/>
              Live</li>
            <li className="py-1 cursor-pointer flex items-center my-2">
            <FontAwesomeIcon icon={faBaseball} className="mr-4"/>
              Sports</li>
            <li className="py-1 cursor-pointer flex items-center my-2">
            <FontAwesomeIcon icon={faMusic} className="mr-4"/>
              Music</li>
            <li className="py-1 cursor-pointer flex items-center my-2">
            <FontAwesomeIcon icon={faGamepad} className="mr-4" />
              Gaming</li>
          </ul>
        </div>
      )
    }

    </>
  );
};

export default SideBar;
