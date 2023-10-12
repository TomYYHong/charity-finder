import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
// import CharityCard from "./CharityCard";

export const apiKey = "pk_live_5c219533c7e402d61a6ea9e3cfb44af0";

interface Charity {
  logoUrl: string;
  coverImageUrl: string;
  name: string;
  description: string;
  ein: string;
  tags: string[];
}

interface CharityResponse {
  nonprofits: Charity[];
}

const Home: React.FC = () => {
  const [charities, setCharities] = useState<Charity[]>([]);

  const fetchInitialCharities = async () => {
    const response = await axios.get<CharityResponse>(
      `https://partners.every.org/v0.2/browse/dogs?apiKey=${apiKey}`
    );
    setCharities(response.data.nonprofits);
  };

  useEffect(() => {
    fetchInitialCharities().catch((err) => console.error(err));
  }, []);

  return (
    <div className="container">
      <Search setCharities={setCharities} />
      <div className="row">
        {charities.map((charity, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
            {/* <CharityCard charity={charity} /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
