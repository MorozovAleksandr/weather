import PropTypes from "prop-types";

const SuggestItem = ({ value, cbHandlerSelect, item }) => {
  const hanlderCity = () => {
    cbHandlerSelect && cbHandlerSelect(item);
  };

  return <div onClick={hanlderCity}>{value}</div>;
};

SuggestItem.propTypes = {
  value: PropTypes.string,
  cbHandlerSelect: PropTypes.func,
  item: PropTypes.object,
};

export default SuggestItem;
