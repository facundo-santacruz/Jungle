import React from 'react';
import "../Css/quantity.css"
import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_DETAIL } from '../Apollo/Mutation/Detail';
import { useState } from 'react';

const Quantity = () => {
  const [ quantity, setQuantity ] = useState(30);
  const [ addDetail ] = useMutation(ADD_DETAIL)
  const location = useLocation();
  const navigate = useNavigate();

  const AddDetail = async () => {
    const kind = location.pathname.split("/")
    const data = await addDetail({variables: {
      truckTransport: location.state.datos._id,
      idDriver: location.state.driver._id,
      kind: kind[1],
      quantity: parseInt(quantity)
    }})
    console.log(data);
    navigate("/")
  }
  
  return (
    <div className='principal'>
        <div className='secondary'>
            <h2>Cantidad</h2>
            <input onChange={(e) => setQuantity(e.target.value) } type="number" name="quantity" min="0" max="30" placeholder='30' />
        </div>
        <button id='btn'  onClick={() => AddDetail()}>Agregar</button>
    </div>
  )
}

export default Quantity