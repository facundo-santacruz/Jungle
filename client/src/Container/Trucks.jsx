import React from 'react';
import '../Css/trucks.css';
import { useQuery, useMutation } from "@apollo/client";
import GET_ALLTRUCKS from '../Apollo/Queries.js';
import Card from '../Component/Card.jsx';
import { useLocation } from 'react-router-dom';

const Trucks = () => {
    var location = useLocation();
    location = location.pathname.slice(1);
    console.log(location);
    const {data, error, loading} = useQuery(GET_ALLTRUCKS)
    if  (loading) return <p>Loading...</p>;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        const { truck } = data;
        return (
            <div className='principalTrucks'>
                <div className='secondaryTrucks'>
                    {truck.map((trucks) => {
                        return (
                            <Card  id={trucks._id} truck={trucks} location={location} />
                    )})}
    
                </div>
            </div>
        )
    }
}

export default Trucks