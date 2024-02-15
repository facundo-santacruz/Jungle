import React from 'react';
import '../Css/trucks.css';
import { useQuery, useMutation } from "@apollo/client";
import Card from '../Component/Card.jsx';
import { useLocation } from 'react-router-dom';
import { GET_ALLTRUCKS } from '../Apollo/Queries.js';

const Trucks = () => {
    const location = useLocation();
    const {data, error, loading} = useQuery(GET_ALLTRUCKS)
    if  (loading) return <p>Loading...</p>;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        console.log(data);
        return (
            <div className='principalTrucks'>
                <div className='secondaryTrucks'>
                    {data.truck.map((truck) => {
                        return (
                            <Card  truck={truck} location={location} />
                    )})}
    
                </div>
            </div>
        )
    }
}

export default Trucks