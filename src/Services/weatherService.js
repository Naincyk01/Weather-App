//import { DateTime } from "luxon";//

// const API_KEY = "23c1ebea0811d0767f45807e323169e8";
// const BASE_URL = "https://api.openweathermap.org/data/2.5";

//https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}//

// const getWeatherData = (infoType, searchParams) => {
//   const url = new URL(BASE_URL + "/" + infoType);
//   url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });

//   return fetch(url).then((res) => res.json())
//    .then((data)=>data) //
// };

// const formatCurrentWeather = (data) => {

//   const {
//     coord: { lon, lat },
//     main: { temp, feels_like, temp_min, temp_max, humidity },
//     name,
//     dt,
//     sys: { country, sunrise, sunset },
//     weather,
//     wind: { speed },
//   } = data;

//   const { main: details, icon } = weather[0];

//   return {
//     lat,
//     lon,
//     temp,
//     feels_like,
//     temp_min,
//     temp_max,
//     humidity,
//     name,
//     dt,
//     country,
//     sunrise,
//     sunset,
//     details,
//     icon,
//     speed,
//   };
// };

// const formatForecastWeather = (data) => {
//   let {list} = data;

//    daily = daily.slice(1, 6).map((d) => {//

// }

//     return {
//       title: formatToLocalTime(d.dt, timezone, "ccc"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });
//   hourly = hourly.slice(1, 6).map((d) => {
//     return {
//       title: formatToLocalTime(d.dt, timezone, "hh:mm a"),
//       temp: d.temp.day,
//       icon: d.weather[0].icon,
//     };
//   });
//   return timezone, daily, hourly;
// };

// const getFormattedWeatherData = async (searchParams) => {
//   const formattedCurrentWeather = await getWeatherData(
//     "weather",
//     searchParams
//   ).then(formatCurrentWeather);

//   const { lat,lon } = formattedCurrentWeather;

//   const formattedForecastWeather = await getWeatherData("forecast", {
//     lat,
//     lon,
//     units:searchParams.units
//   }).then(formatForecastWeather);

//   return formattedCurrentWeather;
// }

//
//   return { ...formattedCurrentWeather, ...formattedForecastWeather };
// };

// const formatToLocalTime = (
//   secs,
//   zone,
//   format = "cccc,dd LLL yyyy' | Local time: 'hh:mm a"
// ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
//

// export default getFormattedWeatherData;

const API_KEY = "23c1ebea0811d0767f45807e323169e8";
 const makeIconURL = (iconId) =>`https://openweathermap.org/img/wn/${iconId}@2x.png`

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;
  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);
  


  const {
    weather,
    main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
    wind: { speed },
    sys: { country},
    name,
    dt,
   

  } = data;
  const { description, icon } = weather[0];
  return {
    description,
    iconURL:makeIconURL(icon),
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
    speed,
    country,
    name,
    dt,
    
  };
};

// const formatForecastWeather = (data) => {
//    let {timezone} = data;

//    return {
//          title: formatToLocalTime(dt, timezone, "ccc"),
//    }
//    };
  
//  const formatToLocalTime = (
//     secs,
//     zone,
//     format = "cccc,dd LLL yyyy' | Local time: 'hh:mm a"
//   ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);
  
  




export { getFormattedWeatherData };
