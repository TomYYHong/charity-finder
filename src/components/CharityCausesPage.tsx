import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { apiKey } from "./HomePage";
import { Charity } from "./HomePage";
import LocationIcon from "../assets/location-icon.png";

// interface CharityData {
//   name: string;
//   logoUrl?: string;
//   location?: string;
// }

interface SearchResults {
  nonprofits: Charity[];
}

export default function CharityCausesPage() {
  const location = useLocation();
  const props: string = location.state as string;
  const currentRoute = location.pathname;

  console.log("props is: " + props);

  const [lists, setLists] = useState<Charity[]>([]);

  useEffect(() => {
    // console.log("Props: " + props);
    axios
      .get<SearchResults>(
        `https://partners.every.org/v0.2/search/${props}?take=30&apiKey=${apiKey}`
        //${import.meta.env.VITE_API_KEY}
      )
      .then((res) => {
        setLists(res.data.nonprofits);
      })
      .catch((err) => console.error(err));
  }, [location, props]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl pt-10 pl-6 tracking-wide font-semibold text-white">
        Search results for: {currentRoute.replace("/search/", "")}
      </h1>
      <div className="flex items-center my-10 w-full">
        {lists.length > 0 ? (
          <div className="grid w-full justify-items-center grid-cols-1 gap-10 px-6 sm:grid-cols-1 lg:grid-cols-3">
            {lists.map((data, id) => (
              <Link
                to={`/charity/${data.name}`}
                state={{
                  data: data,
                  from: currentRoute,
                }}
                // state={data}
                key={id}
                className="mt-5 px-5 py-5 w-full rounded-md bg-grey-700 shadow-lg  hover:brigness-150 hover:drop-shadow(0 20px 20px rgb(0 0 0 / 0.08));"
              >
                <span className="flex items-center text-lg font-semibold">
                  {data.logoUrl ? (
                    <img
                      className="mr-3 rounded-full"
                      src={data.logoUrl}
                      alt={data.name}
                    />
                  ) : (
                    <img
                      className="mr-3 w-12 h-12 rounded-full"
                      src="../src/assets/help.png"
                      alt="Default Logo"
                    />
                  )}
                  {data.name}
                </span>
                <div className="w-full my-3 border-b border-gray-300"></div>
                <span className="flex items-center">
                  <img
                    className="mr-2 w-5 h-5"
                    src={LocationIcon}
                    alt="Location Icon"
                  />
                  {data.location ? (
                    <div>{data.location}</div>
                  ) : (
                    <div>Unknown</div>
                  )}
                </span>
              </Link>
            ))}
          </div>
        ) : (
          <div className="w-full my-16 flex flex-col items-center justify-center text-gray-400 font-bold">
            <div className="text-xl">No Items Found</div>
          </div>
        )}
      </div>
    </div>
  );
}
