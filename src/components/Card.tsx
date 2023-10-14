import { FC } from "react";
import { Charity } from "./HomePage";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/location-icon.png";
import DefaultIcon from "../assets/help.png";
import ComingSoonIcom from "../assets/comingsoon.png";

interface CardProps {
  charity: Charity; // Define a prop called 'charity' of type 'Charity'
  id: number;
}

// export const Card: FC<Charity> = ({
//   logoUrl,
//   coverImageUrl,
//   name,
//   description,
//   location,
// }) => {

export const Card: FC<CardProps> = ({ charity, id }) => {
  // Destructure the 'charity' prop

  const { logoUrl, coverImageUrl, name, description, location } = charity;

  return (
    // <div className="">
    //     <img src={logoUrl}></img>
    // </div>
    <div className="max-w-sm bg-white border border-gray-200  opacity-90  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-120 h-full my-2 mx-1 flex flex-col">
      {/* <img className="rounded-full absolute border-2 " src={logoUrl} alt="" /> */}
      {logoUrl ? (
        <img className="rounded-full absolute border-2" src={logoUrl} />
      ) : (
        <img className="rounded-full absolute border-2" src={DefaultIcon} />
      )}
      {coverImageUrl ? (
        <img className="h-40 w-full aspect-auto " src={coverImageUrl}></img>
      ) : (
        <img className="h-40 w-full aspect-auto " src={ComingSoonIcom}></img>
      )}
      <div className="p-5">
        <h5
          className="mb-2 text-2xl font-bold tracking-tight text-gray-900
                 dark:text-white"
        >
          {name}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-70">
          {description}
        </p>
      </div>
      <div className="flex flex-row items-center mpx-5 text-gray-600">
        <img className="h-10 aspect-auto " src={LocationIcon}></img>
        {location}
      </div>
      <Link
        to={"/charity/" + name}
        // state={charity}
        state={{
          data: charity,
          from: "/",
        }}
        key={id}
        className="flex place-self-center"
      >
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 
      font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 place-self-center"
        >
          Detail
        </button>
      </Link>
    </div>
  );
};
