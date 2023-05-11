

//'AIzaSyBOmTYr6LRpeVZOcy_nRCOH_l5xrf2EBBA' 
import LocationPin from "./LocationPin";
import React from "react";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

//18.886234358239527, -99.06028707502892

export default function MapSection(){
  const defaultProps = {
    center: {
      lat: 18.886234358239527, 
      lng: -99.06028707502892
    },
    zoom: 20
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBOmTYr6LRpeVZOcy_nRCOH_l5xrf2EBBA" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        /> */}
<LocationPin lat={18.886234358239527}
          lng={-99.06028707502892}
          text="Psicóloga Nancy Andrade"/>


      </GoogleMapReact>
    </div>
  );
}

