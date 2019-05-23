const axios = require('axios');

const getClima = async( lat, lon ) => {

    const resp = await axios.get( `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=e5136289b50507a6566ba25cfe0cbe90&units=imperial` )

    return resp.data.main.temp;
}

module.exports = {
    getClima
}