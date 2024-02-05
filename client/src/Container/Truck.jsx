import React from 'react';
import '../Css/truckContainer.css';
import come from "../images/TruckCome.jpg";
import go from "../images/TruckGo.jpg";

const Truck = () => {
  return (
    <div className='containerPrincipal'>
      <div className='containerSecondary'>
        <div  className='cardPrincipal'>
          <img src={come} />
          <h1>Llegada</h1>
        </div>
        <div  className='cardPrincipal'>
          <img src={go} />
          <h1>Salida</h1>
        </div>
        <div  className='cardPrincipal'>
          <img src={go} />
          <h1>Combustible</h1>
        </div>
      </div>
    </div>
  )
}


export default Truck;