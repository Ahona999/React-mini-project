import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({info}) {
    const INIT_URL= 
        "https://images.unsplash.com/photo-1680352267694-a7fd4c33d4e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    
    const HOT_URL = "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1616787826463-56f38488c75e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJhaW55JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    return(
    <div className="InfoBox">

        <div className="cardContainer">
            <Card sx={{ maxWidth: 500 }}>
            <CardMedia
                sx={{ height: 160 }}
                image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {info.city} {
                    info.humidity > 80 
                    ? <ThunderstormIcon/>
                    : info.temp > 15 
                    ? <WbSunnyIcon/>
                    : <AcUnitIcon/>
                }
                </Typography>
                <Typography variant="body2" color="text.secondary" component={"span"}>
                    <p>Temperature: {info.temp}&deg;C</p>
                    <p>Humidity: {info.humidity}</p>
                    <p>Weather: {info.weather}</p>
                    <p>Min Temperature: {info.tempMin}&deg;C</p>
                    <p>Max Temperature: {info.tempMax}&deg;C</p>
                </Typography>
            </CardContent>
            </Card>
        </div>
    </div>
    );
}