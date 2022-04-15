import './SearchInput.css'

const SearchInput = ({ value, cbOnChange }) => {
  const handlerInput = (e) => {
    cbOnChange(e.target.value);
  };

  return <input className="SearchInput" type="text" value={value} onChange={handlerInput} />;
};

export default SearchInput;
