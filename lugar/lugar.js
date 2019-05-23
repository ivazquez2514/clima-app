const axios = require('axios');

const getLugarLatLng = async ( dir ) => {

    const encodeUrl = encodeURI( dir );

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodeUrl }`,
        headers: {'X-RapidAPI-Key': 'IwVJF5S0bimshMPqXRd4UBYtdS8ip1CT2dtjsnMDEyyouInrzo'}
    });

    const resp = await instance.get();

    if ( resp.data.Results.length === 0 ) {

        throw new Error(`No hay resultaos para ${ dir }`);
    }

    const { lat, lon, name } = resp.data.Results[0];

    return {
        direccion: name,
        lat,
        lon
    }

}

module.exports = {
    getLugarLatLng
}