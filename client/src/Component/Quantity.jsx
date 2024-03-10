import React from 'react';
import "../Css/quantity.css"
import { useLocation } from 'react-router-dom';

const Quantity = () => {
  const location = useLocation()
  console.log(location);
  let changeNumber = (e) => {
    var  btn = document.getElementById('btn');
    if (e.target.value != "")  btn.removeAttribute( "disabled");
    else (btn.setAttribute( "disabled", false))
  }
  return (
    <div className='principal'>
        <div className='secondary'>
            <h2>Cantidad</h2>
            <input type="number" onChange={(e) => changeNumber(e)} name="quantity" min="0" max="30" placeholder='30' />
        </div>
        <button id='btn' onClick={console.log("Agregado")}>Agregar</button>
    </div>
  )
}

export default Quantity