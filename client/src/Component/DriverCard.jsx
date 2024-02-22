import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/trucks.css'

const DriverCard = ( { info, driver } ) => {
  const { firstName, lastName, image } = driver;
  return (
    <Link to={`/quantity`} info={info}  className='cardDriver'>
        <img alt={lastName} src={image} />
        <h3>{firstName} {lastName}</h3>
    </Link>
  )
}

export default DriverCard