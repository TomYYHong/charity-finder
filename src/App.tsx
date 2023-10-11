import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/header';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchSuggetion, setSearchSuggetion] = useState([]);


  const apiKey = 'pk_live_5c219533c7e402d61a6ea9e3cfb44af0';

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    getSearchTerm(searchTerm, apiKey);
  };

  const getSearchTerm = (searchTerm: string, apiKey: string) => {
    axios.get(`https://partners.every.org/v0.2/search/${searchTerm}?apiKey=${apiKey}`)
   
      .then((response) => {
        // Handle the search results
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  return (
    <> 
    <Header searchTerm={searchTerm} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      </>
  );
}

export default App;
