import React, { useEffect, useState } from 'react'
import '../Css/trucks.css';
import '../Css/addTruck.css'
import { useMutation } from "@apollo/client";
import { ADD_TRUCK } from '../Apollo/Mutation/Truck';
const AddTruck = () => {
  const [ input, setInput ] = useState({
    name: "",
    letter: "",
    date: "",
    image: "",
    patent: ""
  });
  const [ addTruck, { data, error} ] = useMutation(ADD_TRUCK)

  const cleanInput = () =>  {
    setInput("");
    document.getElementsByClassName("form").reset()
  }
  
  
  async function readURL(e) {
    const image = document.getElementById("imagen");
    //LEEMOS EL BINARIO DE LA IMAGEN
    const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        e.preventDefault();
        image.setAttribute('src', e.target.result)
        setInput({
          ...input,
          ['image']: e.target.result
        });
      }
    }

  const changeState = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    })
  }

  const Add = async() => {
    let { name, letter, date, image, patent } = input;
    
    const response = await addTruck({
      variables: {
          name, letter, date, image, patent
      }
    })
    await (response.data ? cleanInput()  : console.log(response));


  }


  return (
    <div className='principalTrucks'>
      <div className='secondaryTrucks'>
        <h1>Agregar Camion</h1>
        <form className='form'>
          <div className='secondary-form'>
            <div className="input">
              <label htmlFor="name">Name: </label><br />
              <input onChange={(e)=> changeState(e) } type="text" name="name" id="name"/><br />
            </div>
            <div className="input">
              <label htmlFor="letter">Letra: </label><br />
              <input onChange={(e)=> changeState(e) } type="text" name="letter" id="name"/><br />
            </div>
            <div className="input">
              <label htmlFor="date">Fecha de compra: </label><br />
              <input onChange={(e)=> changeState(e) } type="date" name="date" id="name"/><br />
            </div>
            <div className="input">
              <label htmlFor="patent">Patente: </label><br />
              <input onChange={(e)=> changeState(e) } type="patent" name="patent" id="patent"/><br />
            </div>
          </div>
          <div className='secondary-form'>
            <div className='containerimage'>
              <img src='' alt="image" id='imagen' className='imagen' on/>
            <input type='file' accept=".png, .jpg, .jpeg" id='file' onChange={(e) => readURL(e)}/>
            </div>
          </div>
        </form>
        <button onClick={() => Add()}>Agregar Camión</button>
      </div>

    </div>
  )
}


export default AddTruck