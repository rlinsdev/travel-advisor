import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutLinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab';

import useStyles from './styles';

const Map  = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');

  const coordenates = { lat: -22.0123, lng: -47.8908 };

  return(
    <div className={classes.mapContainer}>
      <GoogleMapReact 
        bootstrapURLKeys={{key: 'AIzaSyCTV8UdEdXc4hta6NsVO9QXo29L43w_4iI'}}
        defaultCenter={coordenates}
        center={coordenates}
        defaultZoom={14}
        margin={[50,50,50,50]}
        // options={}
        // onChange={}
        // onChildClick={}
      >

      </GoogleMapReact>
    </div>
  );
}
export default Map;