import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../Store/appSlice";
import { useEffect, useState } from "react";
import { addCache } from "../../Store/searchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const [query, setquery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showSuggestion, setshowSuggestion] = useState(false);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query &&  searchCache[query]) {
        setsuggestions(searchCache[query]);
      } else {
        fetchSuggestions();
      }
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [query]);

  const fetchSuggestions = async () => {
    const data = await fetch(import.meta.env.VITE_Youtube_Search + query);
    const json = await data.json();
    console.log(query);
    console.log(json[1]);
    dispatch(
      addCache({
        [query]: json[1],
      })
    );
    setsuggestions(json[1]);
  };

  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="fixed top-0 left-0 w-full">
      <div className="flex items-center justify-between border-b-2 shadow-md bg-gray-50 px-6 py-2 h-[4rem]">
        <div className="flex gap-4">
          <span onClick={handleMenu} className="cursor-pointer">
            {" "}
            <FontAwesomeIcon icon={faBars} className="h-7" />
          </span>

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUipe0FTyWdINiTKprtW8_namo12bC32Hl3A&s"
            alt="youtube-logo"
            className="h-7 bg-transparent cursor-pointer"
          />
        </div>

        <div className="flex justify-between border-gray-400 border-2 outline-1 w-[40dvw] my-auto rounded-xl ">
          <div className="px-2">
            <input
              value={query}
              onFocus={() => setshowSuggestion(true)}
              onBlur={() => setshowSuggestion(false)}
              onChange={(e) => setquery(e.target.value)}
              type="text"
              placeholder="Search"
              className="pb-1 self-center outline:none w-[37dvw] border:none focus:outline-none focus-within:border-none"
            />
            <span className="bg-gray-50">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="self-center "
              />
            </span>
          </div>
          {showSuggestion && (
            <div className="fixed mt-8 bg-gray-100 rounded-lg shadow-md px-2 w-[40dvw]">
              <ul className="flex flex-col gap-1">
                {suggestions.map((sug) => (
                  <>
                    <li
                      key={sug}
                      className="hover:bg-gray-200 text-lg font-medium"
                    >
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        className="mr-1"
                      />
                      {sug}
                    </li>
                  </>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Header;
