import Driver from "../models/driver.js";

const compareValuesDriver = async ( input ) => {
    const dni = await Driver.findOne( { dni: input.dni } );
    if (dni && (!dni.dni == null || !dni.dni == "")){
        throw new Error(`El DNI: ${input.dni} ya corresponde a un conductor.`)
    };
}
   
    

//AGREGAR CAMIÓN
export const addDriver = async( firstName, lastName, birthday, dni, image ) => {
    if (!firstName && !lastName && !dni) throw new Error("Uno de los campos (Nombre, Apellido o DNI) deben estar completos") 
    const input= { firstName, lastName, dni };
    compareValuesDriver( input )
    return await Driver.create({ firstName, lastName, birthday, dni, image });
};

export const updateDriver = async ( input ) => {
    const driver = await Driver.find( {_id: input._id} );
    if (!driver){
        throw new Error('No se encontró a la persona para llevar a cabo la actualización de la Base de Datos');
    }
    await compareValuesDriver(input);  
    await Driver.findOneAndUpdate({_id: input._id}, input);
    return Driver.findOne ( {_id: input._id} )
}

export const deleteDriver = async ( _id ) => {
    const driver = await Driver.findOne( {_id: _id} );
    if (!driver){
        throw new Error('No se encontró al conductor.');
    }
    await Driver.findOneAndDelete(  {_id: _id} );
    return await Driver.find().populate()
}