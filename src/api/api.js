import * as axios from 'axios';

export const getFlightsTickets = (yyyy, mm, dd) => {
  return axios.get(`https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/RUB/en-US/SVO-sky/JFK-sky/${yyyy}-${mm}-${dd}`, {
    "headers": {
      "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      "x-rapidapi-key": "370db7a1e1msh14a067d1aa1cdbbp19ca25jsn693210260635"
    }
  });
}