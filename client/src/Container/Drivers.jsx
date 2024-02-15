import React from 'react';
import '../Css/trucks.css';
import { useQuery, useMutation } from "@apollo/client";
import { GET_ALLDRIVERS } from '../Apollo/Queries.js';
import { useLocation } from 'react-router-dom';
import DriverCard from '../Component/DriverCard.jsx';

const Drivers = ( { truck, location } ) => {
    const {data, error, loading} = useQuery(GET_ALLDRIVERS)
    if  (loading) return <p>Loading...</p>;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        return (
            <div className='principalTrucks'>
                <div className='secondaryTrucks'>
                    {data.driver.map((driver) => {
                        return (
                            <DriverCard  id={driver._id} driver={driver} truck={truck} location={location} />
                    )})}
    
                </div>
            </div>
        )
    }
}

export default Drivers