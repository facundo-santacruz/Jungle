import React from 'react';
import '../Css/truckContainer.css';
import come from "../images/TruckCome.jpg";
import go from "../images/TruckGo.jpg";
import { Link } from "react-router-dom";

const Truck = () => {
  return (
    <div className='containerPrincipal'>
      <div className='containerSecondary'>
        <Link to={"/arrival"}  className='cardPrincipal' alt='Imagen Camión'>
          <img src={come} />
          <h1>Llegada</h1>
        </Link>
        <Link to={"/departure"}  className='cardPrincipal' alt='Imagen Camión'>
          <img src={go} />
          <h1>Salida</h1>
        </Link>
        <Link to={"/gasoiline"}  className='cardPrincipal' alt='Imagen Surtidor'>
          <img src={go} />
          <h1>Combustible</h1>
        </Link>
      </div>
    </div>
  )
}


export default Truck;