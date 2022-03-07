/* eslint-disable react/no-unescaped-entities */
import Map from 'react-map-gl'
import { useState } from 'react'
import { getCenter } from 'geolib'

function MapBox() {
    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 37.7377,
        longitude: -122.4378,
        zoom: 11,
    })


    return (
        <Map mapStyle="mapbox://styles/siddharthkothari/cl0gqg6sq003614o6qja7linb"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onMove={(e) => setViewport(e.viewport)}
        >

        </Map>
    )
}

export default MapBox