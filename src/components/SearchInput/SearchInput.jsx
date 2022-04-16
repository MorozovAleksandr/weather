import PropTypes from "prop-types";

import "./SearchInput.css";

const SearchInput = ({ value, cbOnChange, cbOnClick }) => {
  const handlerInput = (e) => {
    cbOnChange(e.target.value);
  };

  return (
    <input
      className="SearchInput"
      type="text"
      value={value}
      onChange={handlerInput}
      onClick={cbOnClick}
    />
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  cbOnChange: PropTypes.func,
  cbOnClick: PropTypes.func,
};

export default SearchInput;
