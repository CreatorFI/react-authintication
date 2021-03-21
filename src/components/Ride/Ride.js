import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import fakeData from '../../fakeData/fakedata.json'
import { useParams } from 'react-router';

const Ride = (props) => {
    const [rideData, setRideData] = useState([]);
    const {id} =useParams();
    useEffect(()=>{
        setRideData(fakeData);
        console.log(rideData)
    },[rideData])
    const {bike,car} = rideData;
    console.log(props);
    const showDetails = () =>{
        
        rideData.forEach(element => {
           let  newElement = element;

            
        });
    }
    return (
        <div>
            <h1>Ride Data of {id} </h1>
        </div>
    );
};

export default Ride;