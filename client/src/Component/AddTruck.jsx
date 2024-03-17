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
  const [ addTruck ] = useMutation(ADD_TRUCK, {
    onError: err => alert(err.message)
  })

  //Función para controlar que todosw los campo sesten completos
  const inputState = () => {
    // if ( !!input.name && !!input.letter && !!input.date && !!input.image && !!input.patent ){
    //   document.getElementById("add").removeAttribute("disabled");
    // }else{
    //   document.getElementById("add").setAttribute("disabled", true);
    // }
  }

  // Función de Limpieza del Form
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

  //función guardar valores de los input al estado  
  const changeState = (e) => {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
    inputState();
  }

  //Guardar datos  a la base de datos
  const Add = async() => {
    let { name, letter, date, image, patent } = input;
    const transformedDate = date.split("-").reverse().join("/")
    const response = await addTruck({
      variables: {
          name, letter, date: transformedDate, image, patent
      }
    })
    if (response.data)  cleanInput()  ;
    document.getElementById("name").focus();
  }


  return (
    <div className='principalTrucks'>
      <div className='secondaryAddTrucks'>
        <h1>Agregar Camion</h1>
        <form className='form' id='form'>
          <div className='secondary-form'>
            <div className="input">
              <label htmlFor="name">Name: </label><br />
              <input autoComplete='off' onChange={(e)=> changeState(e) } type="text" name="name" id="name"/><br />
            </div>
            <div className="input">
              <label htmlFor="letter">Letra: </label><br />
              <input autoComplete='off' onChange={(e)=> changeState(e) } type="text" name="letter" id="name"/><br />
            </div>
            <div className="input">
              <label htmlFor="date">Fecha de compra: </label><br />
              <input onChange={(e)=> changeState(e) } type="date" name="date" id="date"/><br />
            </div>
            <div className="input">
              <label htmlFor="patent">Patente: </label><br />
              <input autoComplete='off' onChange={(e)=> changeState(e) } type="text" name="patent" id="patent"/><br />
            </div>
          </div>
          <div className='secondary-form'>
            <div className='containerimage'>
              <img src='' alt="image" id='imagen' className='imagen' on/>
            <input type='file' accept=".png, .jpg, .jpeg" id='file' onChange={(e) => readURL(e)}/>
            </div>
          </div>
        </form>
        <div className='buttonDiv'>
         <button id="add" onClick={() => Add()} >Agregar Camión</button>
        </div>
      </div>

    </div>
  )
}



export default AddTruck