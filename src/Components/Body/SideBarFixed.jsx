import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faPlay, faHouse, faTowerBroadcast, faClapperboard, faMusic } from "@fortawesome/free-solid-svg-icons";

const SideBarFixed = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  const style = " py-1 cursor-pointer flex items-center hover:text-black hover:bg-white transition-colors duration-200 rounded-lg px-2 my-2"
  return (
    <div className="border-b border-b-gray-50 pb-2">
      <ul>
        <Link to="/">
          <li
            className={style}
            onClick={handleClick}
          >
            <FontAwesomeIcon icon={faHouse} className="mr-4"/>
            Home
          </li>
        </Link>
        <li
          className={style}
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faTowerBroadcast} className="mr-4"/>
          Live
        </li>
        <li className={style}>
          {" "}
          <FontAwesomeIcon icon={faPlay}  className="mr-4"/>
          Shorts
        </li>
        <li className={style}>
          <FontAwesomeIcon icon={faClapperboard} className="mr-4"/>
          Subsriptions
        </li>
        <li className={style}>
        <FontAwesomeIcon icon={faMusic} className="mr-4"/>
          Music
        </li>
      </ul>
    </div>
  );
};

export default SideBarFixed;
