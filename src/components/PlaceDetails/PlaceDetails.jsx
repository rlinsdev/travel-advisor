import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles'

const PlaceDetails  = ({ place }) => {
  // console.log(place)
  //console.log(place.photo)
  //console.log(place.photo.images.large.url)
  const classes = useStyles();
  return(
    <Card elevation={6}>
      <CardMedia 
        style={{ height: 350 }}
        image={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography component="legend">Price</Typography>
          <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award)=>(
          <Box my={1} display="flex" justifyContent="space-between" aling="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
          </Box>

        ))}
        {place?.cuisine?.map(({name})=>(
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Typography gutterBottom variant="subtitle2" color="txtSecondary" className={classes.subtitle}>
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant="subtitle2" color="txtSecondary" className={classes.spacing}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
            Trip Advisor
          </Button>
          <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
            WebSite
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
export default PlaceDetails;