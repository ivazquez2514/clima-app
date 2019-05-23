const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { argv } = require('yargs')
                .options({
                    direccion: {
                        alias: 'd',
                        desc: 'Direccion de la ciudad para obtener el clima',
                        demand: true
                    }
                });

const getInfo = async ( direccion ) => {

    try {

        const lugarRes = await lugar.getLugarLatLng( argv.direccion );
        const climaRes = await clima.getClima( lugarRes.lat, lugarRes.lon );
        return `El clima de ${ lugarRes.direccion } es ${ climaRes }`;
    } catch ( e ) {

        return 'No se pudo determinar el clima solicitado :(';
    }

}

getInfo( argv.direccion )
    .then( console.log )
    .catch( console.log );
