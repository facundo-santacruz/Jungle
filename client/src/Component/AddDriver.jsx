import React, { useEffect, useState } from 'react'
import '../Css/trucks.css';
import '../Css/addTruck.css'
import { useMutation } from "@apollo/client";
import { ADD_DRIVER } from '../Apollo/Mutation/Driver';

const AddDriver = () => {
  const [ input, setInput ] = useState({
    firstName: "",
    lastName: "",
    birthday: "",
    dni: "",
    image: "",
  });
  const [ addDriver ] = useMutation(ADD_DRIVER, {
    onError: err => alert(err.message)
  })

  //Función para controlar que todosw los campo sesten completos
  const inputState = () => {
    if ( !!input.name && !!input.letter && !!input.date && !!input.image && !!input.patent ){
      document.getElementById("add").removeAttribute("disabled");
    }else{
      document.getElementById("add").setAttribute("disabled", true);
    }
  }

  // Función de Limpieza del Formulario
  const cleanInput = () =>  {
    setInput("");
    document.getElementById("form").reset();
    document.getElementById("imagen").setAttribute( "src", "" );
    document.getElementById("file").setAttribute('value', "");
    
  }
  
  //Función para cargar imagen en un img, asignar al input su valor string
  async function readURL(e) {
    inputState();
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

  //Guardar datos  a la base de datos
  const Add = async() => {
    let { firstName, lastName, birthday, dni, image } = input;
    const response = await addDriver({
      variables: {
          firstName, lastName, birthday, dni, image
      }
    })
    if (response.data)  cleanInput()  ;
    document.getElementById("first").focus();

  }


  return (
    <div className='principalTrucks'>
      <div className='secondaryAddTrucks'>
        <h1>Agregar Conductor</h1>
        <form className='form' id='form'>
          <div className='secondary-form'>
            <div className="input">
              <label htmlFor="firstName">Nombre/s: </label><br />
              <input autoComplete={off} onChange={(e)=> changeState(e) } type="text" name="firstName" id="firstName"/><br />
            </div>
            <div className="input">
              <label htmlFor="lastName">Apellido/s: </label><br />
              <input onChange={(e)=> changeState(e) } type="text" name="lastName" id="lastName"/><br />
            </div>
            <div className="input">
              <label htmlFor="date">Fecha de Nacimiento: </label><br />
              <input onChange={(e)=> changeState(e) } type="date" name="birthday" id="birthday"/><br />
            </div>
            <div className="input">
              <label htmlFor="dni">DNI: </label><br />
              <input onChange={(e)=> changeState(e) } type="text" name="dni" id="dni"/><br />
            </div>
          </div>
          <div className='secondary-form'>
            <div className='containerimage'>
              <img src='' alt="image" id='imagen' className='imagen' on/>
            <input type='file' accept=".png, .jpg, .jpeg" id='file' onChange={(e) => readURL(e)}/>
            </div>
          </div>
        </form>
        <button id='add' onClick={() => Add()} disabled >Agregar Conductor</button>
      </div>

    </div>
  )
}


export default AddDriver