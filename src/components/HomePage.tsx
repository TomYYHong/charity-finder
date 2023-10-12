import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./SearchPage";
import { causes } from "./causesList";
import { Card } from "./Card";

export const apiKey = "pk_live_5c219533c7e402d61a6ea9e3cfb44af0";

export interface Charity {
  logoUrl: string;
  coverImageUrl: string;
  name: string;
  description: string;
  ein: string;
  tags: string[];
}

interface Response {
  nonprofits: Charity[];
}

const Home: React.FC = () => {
  const [charities, setCharities] = useState<Charity[]>([]);

  const fetchInitialCharities = async () => {
    const randomIndex = Math.floor(Math.random() * causes.length);
    const randomElement = causes[randomIndex];

    const response = await axios.get<Response>(
      `https://partners.every.org/v0.2/browse/${randomElement}?apiKey=${apiKey}`
    );
    setCharities(response.data.nonprofits);
  };

  useEffect(() => {
    fetchInitialCharities().catch((err) => console.error(err));
  }, []);

  return (
    <div className="container place-self-center w-full">
      <Search setCharities={setCharities} />
      <div className="row flex flex-wrap place-content-evenly">
        {charities.map((charity, index) => (
          <div className="flex flex-col place-content-center" key={index}>
            <Card logoUrl={charity.logoUrl} coverImageUrl={charity.coverImageUrl} name={charity.name} 
            description={charity.description} ein={charity.ein} tags={[]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
