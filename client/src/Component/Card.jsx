import React from 'react'
import '../Css/trucks.css'
import { ADD_TRUCKDAY } from '../Apollo/Mutation/TruckDay';
import { useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Card = ( { location, truck } ) => {
  const navigate = useNavigate();
  const { name, image } = truck;
  const kind = location.pathname.slice(1);
  const [ addTruckDay] = useMutation(ADD_TRUCKDAY)
  const BtnPress = async () => {
    const data = await addTruckDay({variables: {
      truck: truck._id
    }})
    console.log(data);
    navigate(`/${kind}/${truck.name}`, { state: data })
  }
  return (
    <div onClick={() => BtnPress()}  className='cardTruck' alt={name} key={truck.id}>
        <img alt={name} src={image} />
        <h3>{name}</h3>
    </div>
  )
}

export default Card