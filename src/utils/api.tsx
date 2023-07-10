import axios from 'axios'

export const FetchWeatherData = async (location: any, setState: any, setImage: any, formatDate: any) => {
    try {
        const url = `http://api.weatherapi.com/v1/future.json?key=6e0ccdc3cf734326bdd140657230807&q=${location}&dt=${formatDate}`
        const response = await axios.get(url)
        const { forecast } = response.data;
        const { day } = forecast.forecastday[0]
        setState(day.maxtemp_c)
        setImage(day.condition.icon)
    } catch (error) {
        console.error(error);
    }
};