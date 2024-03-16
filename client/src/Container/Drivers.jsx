import React from 'react';
import '../Css/driver.css';
import { useQuery } from "@apollo/client";
import { GET_ALLDRIVERS } from '../Apollo/Queries.js';
import DriverCard from '../Component/DriverCard.jsx';

const Drivers = () => {
    
    const {data, error, loading} = useQuery(GET_ALLDRIVERS)
    if  (loading) return <p>Loading...</p>;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        return (
            <div className='containerPrincipal'>
                <div className='containerSecondary'>
                    {data.driver.map((driver) => {
                        return (
                            <DriverCard  id={driver._id}  key={driver._id} driver={driver}/>
                    )})}
    
                </div>
            </div>
        )
    }
}

export default Drivers