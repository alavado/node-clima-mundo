const axios = require('axios')

const obtenerLugar = async (direccion) => {

  const direccionEncoded = encodeURI(direccion)
  
  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionEncoded}`,
    headers: {'X-RapidAPI-Key': 'c5c3de0b68mshffba8c1cf3db0d1p196676jsn7ff6b875a048'}
  })
  
  const resp = await instance.get()
  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`)
  }
  const data = resp.data.Results[0]
  const {name, lat, lon} = data
  return {
    direccion: name,
    lat,
    lng: lon
  }
}

module.exports = {
  obtenerLugar
}
