import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/trucks.css'

const Card = ( { location, truck } ) => {
  const { name, image } = truck;
  return (
    <Link to={`/driver`} truck  className='cardTruck' alt={name} key={truck.id}>
        <img alt={name} src={image} />
        <h3>{name}</h3>
    </Link>
  )
}

export default Card