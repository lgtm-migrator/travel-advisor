import axios from 'axios';

export const getPlaceData = async (type, sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        method: 'GET',
        url: `${URL}`,
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        },
      }
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get(
      'https://community-open-weather-map.p.rapidapi.com/find',
      {
        method: 'GET',
        params: {
          lon: lng,
          lat: lat,
        },
        headers: {
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_WEATHER_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(error);
  }
};
