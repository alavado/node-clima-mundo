const {obtenerLugar} = require('./lugar/lugar')
const {obtenerClima} = require('./clima/clima')

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv

// obtenerLugar(direccion)
//   .then(() => console.log(obtenerClima(direccion.lat, direccion.lng)))
//   .catch(console.log)

// console.log(obtenerClima(35, 139));

const getInfo = async ciudad => {
  const tmp = await obtenerLugar(ciudad)
    .then(lugar => obtenerClima(lugar.lat, lugar.lng))
    .catch(console.log)
  return `El clima de ${ciudad} es de ${tmp}°`
}

getInfo(argv.direccion)
  .then(console.log)