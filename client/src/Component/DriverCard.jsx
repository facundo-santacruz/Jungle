import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import '../Css/trucks.css'


const DriverCard = ( { driver } ) => {
  // console.log(info);
  const navigate = useNavigate()
  const { firstName, lastName, image } = driver;
  const location = useLocation()
  console.log(location.state.data);
  const page = location.pathname.split('/');
  const dir = () => {
    const data = location.state.data + driver;
    navigate(`/${page[1]}/${page[2]}/quantity`, {state: {data, driver} })
  }
  return (
    <div onClick={() => dir()}   className='cardDriver'>
        <img alt={lastName} src={image} />
        <h3>{firstName} {lastName}</h3>
    </div>
  )
}

export default DriverCard