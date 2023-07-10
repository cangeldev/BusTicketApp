import axios from 'axios'
export const FetchWeatherData = (location: any, setState: any, setImage: any, formatDate: any) => {
    const url = `http://api.weatherapi.com/v1/future.json?key=6e0ccdc3cf734326bdd140657230807&q=${location}&dt=${formatDate}`
    axios.get(url)
        .then((response) => {
            const deneme = response.data
            setState(deneme.forecast.forecastday[0].day.maxtemp_c)
            const imageUrl = deneme.forecast.forecastday[0].day.condition.icon
            setImage(imageUrl)
        })
        .catch((error) => {
            console.error(error)
        })
}