
interface SearchFormProps {
    searchTerm: string,
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (event: React.FormEvent) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({searchTerm, handleInputChange , handleSubmit}) => {
return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleInputChange} />
        <button type="submit">Search</button>
      </form>
    </>
  );
}

export default SearchForm;