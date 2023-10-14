import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LocationIcon from "../assets/location-icon.png";
import DefaultIcon from "../assets/help.png";
import backButton from "../assets/backButton.png";
import ComingSoonIcon from "../assets/comingsoon.png";

export default function CharityDetail() {
  let navigate = useNavigate();
  const location = useLocation();
  const props = location.state.data;
  const [addBtn, setAddBtn] = useState(true);
  const [msg, setMsg] = useState(false);

  const data = localStorage.getItem("favoriteList");
  const cacheData = data ? JSON.parse(data) : [];

  const preLocation = location.state.from;
  // const preLocation = localStorage.getItem("path");
  console.log("detail page recieved prev page is: " + preLocation);

  useEffect(() => {
    const data = localStorage.getItem("favoriteList");
    const cacheData = data ? JSON.parse(data) : [];
    if (cacheData.length > 0) {
      for (var i = 0; i < cacheData.length; i++) {
        if (cacheData[i].ein == props.ein) {
          setAddBtn(false);
          break;
        } else {
          setAddBtn(true);
        }
      }
    }
  }, [cacheData]);

  const favItem = {
    ein: props.ein,
    coverImageUrl: props.coverImageUrl,
    logoUrl: props.logoUrl,
    name: props.name,
    location: props.location,
    description: props.description,
    profileUrl: props.profileUrl,
    tags: props.tags,
  };

  function addFav() {
    setMsg(true);
    setAddBtn(false);
    cacheData.push(favItem);
    localStorage.setItem("favoriteList", JSON.stringify(cacheData));
  }

  function rmFav() {
    const index = cacheData.findIndex((obj: any) => obj.ein === props.ein);
    cacheData.splice(index, 1);
    localStorage.setItem("favoriteList", JSON.stringify(cacheData));
    setAddBtn(true);
    setMsg(false);
  }

  return (
    <div className="container justify-center mb-8 px-4  gap-8 mx-auto sm:grid-cols-1 md:grid-cols-3 mt-10 flex flex-col">
      <div className="p-8">
        {preLocation ? (
          <Link to={preLocation}>
            <button
              onClick={() => console.log("preLocation value:", preLocation)}
            >
              <img
                src={backButton}
                className="h-20 hover:brightness-150 drop-shadow-[0_35px_35px_rgba(255, 255, 255)]"
                alt="Go back to pervious page"
                title="Go back to pervious page"
              ></img>
            </button>
          </Link>
        ) : (
          <Link to="/">
            <button
              onClick={() =>
                console.log(
                  "preLocation value without prePage value:",
                  preLocation
                )
              }
            >
              <img
                src={backButton}
                className="h-20"
                alt="Go back to pervious page"
                title="Go back to pervious page"
              ></img>
            </button>
          </Link>
        )}
        <h1
          className={
            "flex flex-wrap justify-center items-center text-3xl tracking-wide font-semibold text-white md:justify-normal"
          }
        >
          {props.name}
        </h1>
        <div className="col-span-2 rounded-md shadow-md">
          {props.coverImageUrl ? (
            <div>
              <img className="rounded-t-lg" src={props.coverImageUrl} />
            </div>
          ) : (
            <div>
              <img className="rounded-t-lg" src={ComingSoonIcon} />
            </div>
          )}

          <div className="flex items-center my-6">
            {props.logoUrl ? (
              <img
                className="mr-3 mb-3 rounded-full md:mb-0"
                src={props.logoUrl}
              />
            ) : (
              <img className="mr-3 w-12 h-12 rounded-full" src={DefaultIcon} />
            )}
            <img className="mr-2 w-5 h-5" src={LocationIcon} />
            {props.location ? <div>{props.location}</div> : <div>Unknown</div>}
          </div>
          <div className="w-full h-fit">
            <p className="text-fit">{props.description}</p>
          </div>
        </div>
      </div>
      <div className="p-6 col-span-2 h-fit rounded-md shadow-md md:col-span-1">
        <div>
          {msg && (
            <div className={"flex mb-6 justify-center font-bold "}>
              This Charity Added To Your Favorite !
            </div>
          )}

          {addBtn ? (
            <a>
              <button
                className=" w-full text-white bg-purple-700 hover:bg-purple-800 focus:white focus:ring-4 focus:ring-purple-300 
                rounded-full text-lg px-2 py-2 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 place-self-center font-bold duration-300 "
                onClick={addFav}
              >
                Added to your favorites
              </button>
            </a>
          ) : (
            <a>
              <button
                className=" w-full text-white bg-pink-700 hover:bg-pink-800 focus:white focus:ring-4 focus:ring-pink-300 
                rounded-full text-lg px-2 py-2 text-center mb-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-900 place-self-center font-bold duration-300 "
                onClick={rmFav}
              >
                Removed from your favorites
              </button>
            </a>
          )}
        </div>
        <div className="mt-4">
          <a href={props.profileUrl} target="_blank">
            <button
              className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:white focus:ring-4 focus:ring-blue-300 
                rounded-full text-lg px-2 py-2 text-center mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 place-self-center font-bold duration-300 "
            >
              Check it in Every.org
            </button>
          </a>
        </div>
        <div className="mt-2 flex flex-wrap">
          {props.tags && (
            <div className="mt-6 flex flex-col">
              <div className="font-semibold text-lg">Tag:</div>
              <div className="flex flex-wrap mt-1">
                {props.tags.map((data: string, id: string) => (
                  <Link
                    to={"/search/" + data}
                    state={data}
                    key={id}
                    className="bg-purple-800 text-white px-4 py-4 m-3 rounded-3xl shadow-md hover:bg-purple-900 duration-300"
                  >
                    {data}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
