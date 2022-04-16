import PropTypes from "prop-types";

import SuggestItem from "./SuggestItem/SuggestItem";

import "./Suggest.css";

const Suggest = ({ list, cbHandlerSelect, cbCloseSuggest }) => {
  const renderList = list.map((i) => (
    <SuggestItem
      value={i.title}
      key={i.areaId}
      item={i}
      cbHandlerSelect={cbHandlerSelect}
    />
  ));

  return (
    <>
      <div className="suggest">{renderList}</div>

      <div className="suggest_bg" onClick={cbCloseSuggest}></div>
    </>
  );
};

Suggest.propTypes = {
  list: PropTypes.array,
  cbHandlerSelect: PropTypes.func,
  cbCloseSuggest: PropTypes.func,
};

export default Suggest;
