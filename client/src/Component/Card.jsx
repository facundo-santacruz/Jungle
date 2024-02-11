import React from 'react'
import { Link } from 'react-router-dom'
import '../Css/trucks.css'

const Card = ( { text, alt } ) => {
  const img = require('../images/' + text + '.jpg')
  return (
    <Link to={`/${text}`}  className='cardPrincipal' alt={alt}>
        <img src={img} />
        <h1>Llegada</h1>
    </Link>
  )
}

export default Card