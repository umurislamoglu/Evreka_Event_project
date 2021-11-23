import React , {useState,useEffect} from 'react'
import { MapContainer ,TileLayer , Marker  } from 'react-leaflet';

const Location = ({location}) => {

    const [position ,setPosition] = useState([])


    useEffect(()=>{
        location && setPosition([location.latitude,location.longitude])
    },[location])




    return (
        <div>
            {position.length>0 && (
                 <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
                 <TileLayer
                   attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                   url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
                 <Marker position={position}>
                  
                 </Marker>
               </MapContainer>
            )}
           
        </div>
    )
}

export default Location
