// import { useState } from 'react'
// import reactLogo from './assets/react.svg'

// import { useMemo } from 'react'

// // import google maps api stuff here -- write what each one does
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"

// import { Wrapper } from "@googlemaps/react-wrapper"


// function App() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyB6ODHsrSxLElEVgZ4tX9pMG1vlhaqcwxE",

//   })


//   if(!isLoaded) {
//     console.log("no load") 
//   } 
//     return (
//       <div className="App">
//         <Map />
//       </div>
//     )

  
// }

// function Map() {
//   return (
//   /* renders out the google map component 
//    * 
//    * pass in three props
//    * zoom
//    * center: where map is centered at when first rendered
//    * mapContainerClassName: class name identifier 
//    */
//   <GoogleMap
//     onLoad={map => {
//       const bounds = new window.google.maps.LatLngBounds()
//       map.fitBounds(bounds)
//     }}>
//     // zoom={10} 
//     // center={{lat: 44, lng: -88}} 
//     // mapContainerClassName="map-container"
//   </GoogleMap>
// )}

// export default App

// import React from 'react'
// import { GoogleMap, useLoadScript } from '@react-google-maps/api'

// console.log(window.google)

// const options = {
//   zoomControlOptions: {
//     position: google.maps.ControlPosition.RIGHT_CENTER // ,
//     // ...otherOptions
//   }
// }

// export default function App() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyB6ODHsrSxLElEVgZ4tX9pMG1vlhaqcwxE" // ,
//     // ...otherOptions
//   })

//   const renderMap = () => {
//     // wrapping to a function is useful in case you want to access `window.google`
//     // to eg. setup options or create latLng object, it won't be available otherwise
//     // feel free to render directly if you don't need that
//     const onLoad = React.useCallback(
//       function onLoad (mapInstance) {
//         // do something with map Instance
//       }
//     )
//     return <GoogleMap
//       options={options}
//       onLoad={onLoad}
//     >
//       {
//         // ...Your map components
//       }
//     </GoogleMap>
//   }

//   if (loadError) {
//     return <div>Map cannot be loaded right now, sorry.</div>
//   }

//   return isLoaded ? renderMap() : <Spinner />
// }

import React, { Component } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

/* Creating the style of map here */
const containerStyle = {
  width: '400px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

/* functional map component */
function MyComponent() {
  return (
    /* call load script everytime we render out a map, creates script tag in index.html */
    <LoadScript
      googleMapsApiKey=""
    >
      {/*Actual GoogleMap component here, we call this component everytime we want to render a map */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

// honestly no sure what memo does, gotta look it up later
export default React.memo(MyComponent)