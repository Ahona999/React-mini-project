import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

//Button Type is very important//
export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1eb1025ea1e7bfbdad9abed44b3b549b";

    let getWeatherInfo = async () => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonReponse = await response.json();
            let result = {
                city: city,
                temp: jsonReponse.main.temp,
                tempMin: jsonReponse.main.temp_min,
                tempMax: jsonReponse.main.temp_max,
                humidity: jsonReponse.main.humidity,
                weather: jsonReponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };


    let handleChange = (event) => {
        setCity(event.target.value);
    }


    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
         } catch (err) {
            setError(true);
         }
    };

    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" value={city} onChange={handleChange} required/>
            <br/><br/>
            <Button variant="contained" type="submit">Search</Button>
            {error && <p style={{color: "red"}}>No Such Place Exists!</p>}
            </form>
        </div>
    );
}