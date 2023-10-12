import { useState, useEffect, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { causes } from "./causesList";
import SearchBar from "./searchBar";
import help_icon from "../assets/help.png";
import fav_icon from "../assets/fav-icon.png"

export default function Header() {
  const [display, setDisplay] = useState<boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchList, setSearchList] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    setSearchInput("");
  }, [location]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setDisplay(true);
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    const causesList = causes;
    if (causesList != null) {
      const result = causesList
        .filter((item) => item.includes(inputValue));
      setSearchList(result);
    }
  }

  function showDropDown() {
    setDisplay(false);
  }

  return (
    <header>
      <nav className="py-6 bg-[#6d95bb]">
        <div className="container mx-auto items-center justify-around md:flex md:flex-wrap">
          <Link to="/">
            <div className="flex justify-center w-20 items-center ">
              <img
                className="h-20 w-full"
                src={help_icon}
                alt="Charity-Finder"
              />
              <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
                CharityFinder
              </span>
            </div>
            </Link>
            
        <SearchBar showDropDown={showDropDown} handleChange={handleChange} searchInput={searchInput} display={display} searchList={searchList} />
          
          
          <div className="flex mt-6 justify-center md:my-auto">
            <Link to="/favorites">
              <button
                type="button"
                className="space-x-2 items-center border-0 rounded-full p-3 bg-neutral-600 hover:bg-[#bbb745] hover:brightness-100 duration-500"
              >
                <div>
                  <img
                    src={fav_icon}
                    className="w-10 h-fit"
                    alt="Favorites"
                  />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
