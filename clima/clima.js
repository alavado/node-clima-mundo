const axios = require('axios')

const obtenerClima = async (lat, lng) => {
  
  const appid = '548378fadbd1e5241d783032aebfcd33'

  const instance = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${appid}&units=metric`,
  })
  
  const resp = await instance.get()
  return resp.data.main.temp
}

module.exports = {
  obtenerClima
}
