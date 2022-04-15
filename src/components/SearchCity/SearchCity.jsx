import { useState } from "react";

import SearchInput from "../SearchInput/SearchInput";
import Suggest from "../Suggest/Suggest";
import { cityMock } from "../../mock/mockCity";

import "./SearchCity.css";

const filterCity = (value, cities) =>
  cities.filter((item) => item.indexOf(value) !== -1);

const SearchCity = () => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestVisible, setSuggestVisible] = useState(false);
  const [cityList, setCityList] = useState(null);

  const searchCityOnChage = (value) => {
    setSearchCity(value);

    if (value?.length) {
      setSuggestVisible(true);

      setCityList(filterCity(value, cityMock));
    } else {
      setSuggestVisible(false);
    }
  };

  return (
    <div className="searchCity">
      <SearchInput value={searchCity} cbOnChange={searchCityOnChage} />
      {suggestVisible && <Suggest list={cityList} />}
    </div>
  );
};

export default SearchCity;
