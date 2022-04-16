import "./Suggest.css";
import SuggestItem from "./SuggestItem/SuggestItem";

const Suggest = ({ list }) => {
  const renderList = list.map((i) => <SuggestItem value={i.city} key={i.areaId}/>);

  return (
    <div className="suggest">
      {renderList}
    </div>
  );
};

export default Suggest;
