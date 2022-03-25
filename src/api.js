// Using Ergast Developer API (http://ergast.com/mrd/)

import axios from "axios";

const config = {
  baseURL: "https://ergast.com/api/f1",
  format: ".json",
};

export const getLastRaceResults = () => {
  axios.get(`${config.baseURL}/current/last/results${config.format}`)
    .then((res) => {
      console.log(res);
    });
};
