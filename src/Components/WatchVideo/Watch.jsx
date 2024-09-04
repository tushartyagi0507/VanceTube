// import { useSearchParams } from "react-router-dom";

// const Watch = () => {
//   const [serachparam] = useSearchParams();
//   console.log(serachparam.get("v"));

//   return (
//     <div className="p-1 m-1">
//       <iframe
//         width="800"
//         height="400"
//         src={"https://www.youtube.com/embed/" + serachparam.get("v")}
//         title="YouTube video player"
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         allowFullScreen
//       ></iframe>
//     </div>
//   );
// };

// export default Watch;

import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
import { closeMenu } from "../../Store/appSlice";

const WatchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return (
    <div className="px-5 flex flex-col w-screen mt-2">
      <div className="flex flex-col lg:flex-row">

        <div className="flex-1 ">
          <iframe
            width="100%" // Responsive width
            height="500" // Fixed height
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:w-1/4">
          <LiveChat />
        </div>
      </div>
      
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
