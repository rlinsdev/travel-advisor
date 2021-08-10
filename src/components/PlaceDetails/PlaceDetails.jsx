import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core'
// import LocationOnIcon from '@material-ui/icons/LocationOnIcon';
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
        style={{height:350}}
        image={place.photo? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottonm variant="h5">{place.name}</Typography>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBotton variant="subtitle1">{place.price_level}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBotton variant="subtitle1">{place.ranking}</Typography>
        </Box>
        {place?.awards?.map((award)=>(
          <Box display="flex" justifyContent="space-between" aling="center">
            <img src={award.images.small} alt={award.display_name} />

          </Box>

        ))}
      </CardContent>
    </Card>
  );
}
export default PlaceDetails;