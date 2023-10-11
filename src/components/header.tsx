import SearchForm from "./searchForm";
import helpImg from "../assets/help.png"


interface HeaderProps {
    searchTerm: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
}

const Header: React.FC<HeaderProps> = ({searchTerm, handleInputChange , handleSubmit}) => {
    return (
        <>
        <div className="flex-row">
        <img className="h-12" src={helpImg}></img>
        <SearchForm searchTerm={searchTerm} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
        </div>
        </>
      );
    }
    
    export default Header;