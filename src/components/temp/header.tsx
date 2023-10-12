import SearchForm from "../Search";
import helpImg from "../assets/help.png";
import { apiKey } from "../Home";
import axios from "axios";

interface HeaderProps {
  searchTerm: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent) => void;
}

const Header: React.FC<HeaderProps> = ({
  searchTerm,
  handleInputChange,
  handleSubmit,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggetion, setSearchSuggetion] = useState([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = event.target.value;
    setSearchTerm(newSearchTerm);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent form submission
    getSearchTerm(searchTerm, apiKey);
  };

  const getSearchTerm = (searchTerm: string, apiKey: string) => {
    axios
      .get(
        `https://partners.every.org/v0.2/search/${searchTerm}?apiKey=${apiKey}`
      )

      .then((response) => {
        // Handle the search results
        console.log(response.data);
      })
      .catch((error) => {
        // Handle errors
        console.error(error);
      });
  };

  // return (
  //   <>
  //   <Header searchTerm={searchTerm} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
  //     </>
  // );

  return (
    <>
      <div className="flex-row">
        <img className="h-12" src={helpImg}></img>
        <SearchForm
          searchTerm={searchTerm}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
};

export default Header;
