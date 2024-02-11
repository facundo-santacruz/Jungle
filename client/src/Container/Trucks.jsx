import React from 'react';
import '../Css/trucks.css';
import { useQuery, useMutation } from "@apollo/client";
import GET_ALLTRUCKS from '../Apollo/Queries.js';

const Trucks = () => {
    const {data, error, loading} = useQuery(GET_ALLTRUCKS)
    if  (loading) return <p>Loading...</p>;
    if (error) return <p> Error : {error.message}</p>;
    if (data){
        const { truck } = data;
        console.log(truck[1]);
        return (
            <div className='principalTrucks'>
                <div className='secondaryTrucks'>
                    {truck.map((trucks) => {
                        return <div key={trucks._id} >
                            <h2>{trucks.name}</h2>
                        </div>
                    })}
    
                </div>
            </div>
        )
    }
}

export default Trucks