import { ChangeEvent, FC } from "react";
import { Link } from "react-router-dom";
import searchIcon from "../assets/search-icon.png";

interface SearchBarProps {
  showDropDown: () => void;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  searchInput: string;
  display: boolean;
  searchList: string[];
}

const SearchBar: FC<SearchBarProps> = ({
  showDropDown,
  handleChange,
  searchInput,
  display,
  searchList,
}) => {
  console.log("search bar reached" + { searchInput });

  return (
    <div className="drop-shadow-md mt-4 px-0 md:my-auto z-10">
      <div className="relative flex flex-row place-content-center">
        <input
          type="text"
          onBlur={() => setTimeout(showDropDown, 300)}
          onChange={handleChange}
          value={searchInput}
          className="px-4 py-3 border border-gray-300 rounded-sm w-70% h-12
                            lg:w-[28rem] text-black
                            hover:outline outline-1 
                            outline-[#32C8BB] focus:outline outline-offset-0"
          placeholder="Please enter key word to find charity"
        />
        {/* displays search suggestions or autocomplete results in a dropdown when the display state is true */}
        {display && (
          <div className="flex flex-row flex-wrap absolute top-12 w-full h-fit bg-black border mx-auto rounded-b-lg pr-8 py-3">
            {searchList && (
              <>
                {searchList.map((data, id) => (
                  <Link
                    to={"/search/" + data}
                    state={data}
                    key={id}
                    className="px-3 py-4 rounded-full hover:bg-slate-600 duration-700"
                  >
                    {data}
                  </Link>
                ))}
              </>
            )}
          </div>
        )}
        <div className="bg-white border  inset-y-0 left-0 w-6 place-content-center">
          <Link to={"/search/" + searchInput} state={searchInput}>
            <button type="button">
              <img
                src={searchIcon}
                className="w-5 h-5 place-self-center"
                alt="Search"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
