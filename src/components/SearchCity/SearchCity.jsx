import { useState } from "react";

import SearchInput from "../SearchInput/SearchInput";
import Suggest from "../Suggest/Suggest";

import { ozonCitySearchRequest } from "../../api/api";
import { ozonCitiesMapping } from "../../utils/mapData";

import "./SearchCity.css";

const SearchCity = () => {
  const [searchCity, setSearchCity] = useState("");
  const [suggestVisible, setSuggestVisible] = useState(false);
  const [cityList, setCityList] = useState([]);

  const handlerInput = async (value) => {
    setSearchCity(value);

    if (value?.length) {
      const getCities = await ozonCitySearchRequest(value);
      const cities = ozonCitiesMapping(getCities.data);

      setCityList(cities);
      setSuggestVisible(true);
    } else {
      setSuggestVisible(false);
    }
  };

  const handlerSelectCity = (e) => {
    console.log(e);
  }

  return (
    <div className="searchCity">
      <SearchInput value={searchCity} cbOnChange={handlerInput} />
      {suggestVisible && (
        <>
          <Suggest list={cityList} />
        </>
      )}
    </div>
  );
};

export default SearchCity;
