import React from 'react';
import "../Css/quantity.css"

const Quantity = ( info ) => {
  return (
    <div className='principal'>
        <div className='secondary'>
            <h2>Cantidad</h2>
            <input type="number" name="quantity" min="0" max="30" placeholder='30' />
        </div>
        <button onClick={console.log("Agregado")}>Agregar</button>
    </div>
  )
}

export default Quantity