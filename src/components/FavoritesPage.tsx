import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/location-icon.png";
import DefaultIcon from "../assets/help.png";

interface CharityData {
  name: string;
  logoUrl?: string;
  location?: string;
}

export default function Favorite() {
  const [favItems, setFavItems] = useState<CharityData[]>([]);
  const [check, setCheck] = useState<boolean>(false);

  useEffect(() => {
    // let data = JSON.parse(localStorage.getItem("favoriteList"));
    // let cacheData = data ? data : [];
    let data = localStorage.getItem("favoriteList");
    let cacheData: CharityData[] | [] = data ? JSON.parse(data) : [];

    if (!check) {
      setCheck(true);
      setFavItems(cacheData);
    }
  }, [favItems, check]);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl pt-10 pl-6 tracking-wide font-semibold text-white">
        Favorite
      </h1>
      <div className="flex items-center my-10">
        {favItems.length > 0 ? (
          <div className="w-full px-4 grid grid-cols-1 gap-10 sm:grid-cols-1 lg:grid-cols-3">
            {favItems.map((data, id) => (
              <Link
                to={`/charity/${data.name}`}
                // state={data}
                state={{
                  data: data,
                  from: "/favorites",
                }}
                key={id}
                className="px-5 py-5 w-full rounded-md bg-grey-700 shadow-lg hover:bg-grey-800"
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
                      src={DefaultIcon}
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
          <div className="w-full flex justify-center">
            <span className="text-xl font-semibold text-gray-400">
              No Favorites Yet
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
