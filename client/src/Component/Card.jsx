import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/trucks.css'

const Card = ( { location, alt, truck } ) => {
  const { name, image } = truck;
  return (
    <Link to={`/${location}/${name}`}  className='cardTruck' alt={alt}>
        <img alt={name} src={image} />
        <h3>{name}</h3>
    </Link>
  )
}

export default Card