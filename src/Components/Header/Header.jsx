import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../Store/appSlice";
import { useEffect, useRef, useState } from "react";
import { addCache } from "../../Store/searchSlice";
import {  useNavigate } from "react-router-dom";
import { addResults } from "../../Store/resultSlice";

const Header = () => {


  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);
  const focusRef = useRef()
  const navigate = useNavigate()

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const notshowsuggestion = (e)=>{
      // console.log(e.target)
      // console.log(focusRef.current)
      // checking if the input is selected then do not close the suggestion box obviouly else remove the suggestion box
      if(e.target != focusRef.current) setshowSuggestion(false)
    }
    window.addEventListener("click", notshowsuggestion)
    const timer = setTimeout(() => {
      if (query &&  searchCache[query]) {
        setsuggestions(searchCache[query]);
      } else {
        fetchSuggestions();
      }
    }, 300);
    return () => {
      clearInterval(timer);
      window.removeEventListener("click", notshowsuggestion)
    };
  }, [query]);

  const fetchSuggestions = async () => {
    const data = await fetch(import.meta.env.VITE_Youtube_Search + query);
    const json = await data.json();
    // console.log(query);
    // console.log(json[1]);
    dispatch(
      addCache({
        [query]: json[1],
      })
    );
    setsuggestions(json[1]);
  };

  const handleMenu = () => {
    console.log("clicked")
    dispatch(toggleMenu());
  };

  const handleSearchVideo = (sug)=>{
  //  console.log(sug)
   const fetchResult = async ()=>{
    const data = await fetch(import.meta.env.VITE_SEARCH_RESULT+sug)
    const json = await data.json()
    // console.log(json.items)
    dispatch(addResults(json.items))
   navigate(`/search/${sug}`)
   }
   fetchResult()
  }

  return (
    <div className="fixed top-0 left-0 min-w-full bg-black text-white z-50 flex items-center shadow-md px-6 py-2 h-[4rem] justify-between
   ">
      {/* <div className="flex items-center shadow-md px-6 py-2 h-[4rem]"> */}
        <div className="flex gap-4 items-center">
          <span onClick={handleMenu} className="cursor-pointer">
            {" "}
            <FontAwesomeIcon icon={faBars} className="md:h-6 h-4" />
          </span>
          <img className="md:h-9 h-6" src="https://lh3.googleusercontent.com/rormhrw_yZt2v1OKZBaiFCSt8b8QU02kEKiuilfgnpGkOMQd87xm7b7SyIlGoHsL18M" alt="V-logo"/>
          <span className="font-bold sm:inline-block md:text-xl text-sm min-[200px]:hidden">VanceTube</span>
        </div>

        <div  className="flex border-gray-400 border-2 outline-1 md:rounded-xl md:h-9 h-6 w-[40dvw] lg:p-1 p-3">
          <div className="md:px-2 self-center flex justify-between w-full">
            <input
              ref={focusRef}
              value={query}
              onFocus={() => setshowSuggestion(true)}
              // onBlur={() => setshowSuggestion(false)}
              onChange={(e) => setquery(e.target.value)}
              type="text"
              placeholder="Search"
              className="text-sm md:text-base pb-1 self-center outline:none focus:outline-none focus-within:border-none bg-inherit w-[90%] border-none"
              
            />
            <span className="bg-inherit self-center">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
              />
            </span>
          </div>

          {showSuggestion && (
            <div className="fixed mt-8 bg-[#282828] rounded-lg shadow-md px-2 w-[40dvw] text-white z-600">
              <ul className="flex flex-col gap-1">
                {suggestions.map((sug, index) => (
                    <li
                      key={index} onClick={()=> handleSearchVideo(sug)}
                      className="hover:bg-[#383838] text-lg font-medium "
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="mr-1"
                      />
                      {sug}
                    </li>
                  
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="">
          <FontAwesomeIcon icon={faUser} className="md:h-9 h-6" />
        </div>
      {/* </div> */}
    
    </div>
  );
};

export default Header;
