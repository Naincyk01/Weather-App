const API_KEY = "23c1ebea0811d0767f45807e323169e8";
const BASE_URL = "https://api.openweathermap.org/data/2.5";


const getWeatherData = (infoType,searchParams)=>{
    const url = new URL(BASE_URL + "/" + infoType);
    url.search = new URLSearchParams({...searchParams,appid:API_KEY})


    return fetch(url)
    .then((res)=>res.json())
    .then((data)=>data);
};

export default getWeatherData;

