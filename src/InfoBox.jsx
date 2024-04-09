import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
export default function InfoBox({info})
{
    // let init_URL="https://images.unsplash.com/photo-1694153273816-a398243f6bb8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let cold_url="https://images.unsplash.com/photo-1612099452845-bdcf4ee76b1a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let summer_url="https://images.unsplash.com/photo-1615066037299-7fd7fe32686b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    let rainy_url="https://images.unsplash.com/photo-1565065524861-0be4646f450b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  
    return(
        <div className='Infobox'>
            
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? rainy_url : info.temp>20 ? summer_url :cold_url}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp>20 ? <WbSunnyIcon/> :<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p> temp={info.temp}&#x2103;</p>
       <p>Humidity={info.humidity}</p>
           <p>tempMax={info.tempMax}&#x2103;</p>
            <p> tempMin={info.tempMin}&#x2103;</p>
            <p>THe weather can be described as <i>{info.weather}</i> and it feel like {info.feelsLike}&#x2103;</p>

        </Typography>
      </CardContent>
    
    </Card>

        </div>
    )
}