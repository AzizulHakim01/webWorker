import axios from "axios"

const baseURL = `https://betsapi2.p.rapidapi.com/v1/bet365`

const options = {
    url: baseURL,
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
      'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST
    }
  };

  export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${baseURL}/${url}`, options)
    return data;
  }