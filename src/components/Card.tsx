import { FC } from "react"
import { Charity } from "./HomePage"
import { Link } from "react-router-dom";

export const Card: FC<Charity> = ({logoUrl, coverImageUrl, name, description,ein}) => {
    return (
        // <div className="">
        //     <img src={logoUrl}></img>
        // </div>
        <div className="max-w-sm bg-white border border-gray-200  opacity-90  rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-h-120 h-full my-2">

            <img className="rounded-full absolute border-2 " src={logoUrl} alt="" />
            <img className="h-40 w-full aspect-auto " src= {coverImageUrl}></img>  
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900
                 dark:text-white">{name}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 max-h-70">
                {description}
                </p>
        </div>
        <Link to={""}>
        <button>
            
        </button>
        </Link>
        </div>

    );
} 