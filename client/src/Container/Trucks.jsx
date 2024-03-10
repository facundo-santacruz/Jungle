import React from 'react';
import '../Css/trucks.css';
import { useQuery, useMutation } from "@apollo/client";
import Card from '../Component/Card.jsx';
import { useLocation } from 'react-router-dom';
import { GET_ALLTRUCKS } from '../Apollo/Queries.js';
import Loading from "../images/b6e0b072897469.5bf6e79950d23.gif";

const Trucks = () => {
    const location = useLocation();
    const {data, error, loading} = useQuery(GET_ALLTRUCKS)
    if  (loading) return <img src={Loading} alt="Loading" />;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        return (
            <div className='principalTrucks'>
                <div className='secondaryTrucks'>
                    {data.truck.map((truck) => {
                        return (
                            <Card  truck={truck} location={location} key={truck.name} />
                    )})}
    
                </div>
            </div>
        )
    }
}

export default Trucks