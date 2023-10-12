import { useState, useEffect, ChangeEvent } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { causes } from "./components/causesList";

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
        .filter((item) => item.includes(inputValue))
        .slice(0, 10);
      setSearchList(result);
    }
  }

  function handleBlur() {
    setDisplay(false);
  }

  return (
    <header>
      <nav className="py-6 bg-[#515151] font-ubuntu">
        <div className="container mx-auto items-center justify-around md:flex md:flex-wrap">
          <Link to="/">
            <div className="flex justify-center w-full items-center lg:w-14">
              <img
                className="w-20 h-20 mr-3"
                src="./src/assets/help.png"
                alt="Charity-Finder"
              />
              <span className="self-center text-2xl text-white font-bold whitespace-nowrap">
                CharityFinder
              </span>
            </div>
          </Link>
          <div className="drop-shadow-md mt-4 px-0 md:my-auto ">
            <div className="relative flex flex-row place-content-center">
              <input
                type="text"
                onBlur={() => setTimeout(handleBlur, 200)}
                onChange={handleChange}
                value={searchInput}
                className="px-4 py-3 border border-gray-300 rounded-sm w-70%
                                lg:w-[28rem]
                                hover:outline outline-1 
                                outline-[#32C8BB] focus:outline outline-offset-0"
                placeholder="Please enter key word to find charity"
              />
              {/* displays search suggestions or autocomplete results in a dropdown when the display state is true */}
              {display && (
                <div className="flex flex-row flex-wrap absolute w-full h-fit bg-black border mx-auto rounded-b-lg p-2 lg:w-[28rem]">
                  {searchList && (
                    <>
                      {/* map each suggestion keyword to a link  */}
                      {searchList.map((data, id) => (
                        <Link
                          to={"/search/" + data}
                          //   The state prop allows you to attach additional data to the link.
                          state={data}
                          //   React provides a unique identifier for each element in the list, which helps React efficiently update and render the list.
                          key={id}
                          className="px-3 py-4 rounded-full hover:bg-slate-600 duration-700"
                        >
                          {/* the actual display item/word */}
                          {data}
                        </Link>
                      ))}
                    </>
                  )}
                </div>
              )}
              <div className="bg-white border  inset-y-0 left-0 w-6 place-content-center">
                <Link to={"/search/" + searchInput}>
                  <button type="button">
                    <img
                      src="./src/assets/search-icon.png"
                      className="w-5 h-5 place-self-center"
                      alt="Search"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex mt-6 justify-center md:my-auto">
            <Link to="/favorites">
              <button
                type="button"
                className="space-x-2 items-center border-0 rounded-full p-3 bg-white hover:bg-[#E2E2E2] duration-300"
              >
                <div>
                  <img
                    src="./src/assets/help.png"
                    className="w-5 h-5"
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
