import axios from "axios";

const ozonCitySearchURL = "https://www.ozon.ru/api/location/v2/search";

export const ozonCitySearchRequest = (value) => {
  return axios
    .get(`${ozonCitySearchURL}?query=${value}`)
    .then((result) => result)
    .catch((error) => console.log(error));
};
