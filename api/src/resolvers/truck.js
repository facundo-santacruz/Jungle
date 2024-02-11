import Truck from '../models/truck.js';

//COMPARE IF EXIST SOME PATENT, NAME OR LETTER ON THE DATABASE
const compareValuesTruck = async ( input ) => {
    const name = await Truck.findOne( { name: input.name } );
    if (name && (!name.name == null || !name.name == "")){
        throw new Error(`El camión ${input.name} ya existe.`)
    };
    const patent = await Truck.findOne( { patent: input.patent } );
    if (patent && (!patent.patent == null || !patent.patent == "")){
        throw new Error(`La patente ${input.patent} ya existe. Corresponde al camión ${patent.name}.`)
    };
    const letter = await Truck.findOne( { letter: input.letter})
    if(letter && (!letter.letter == null || !letter.letter == "")){
        throw new Error(`La letra ${input.letter} ya existe. Corresponde al camión ${letter.name}.`)
    };
}

export const addTruck = async( name, letter, date, patent, image ) => {
    if (!name  && !patent) throw new Error("Uno de los campos (Nombre o Patente) deben estar completos") 
    const input= { name, letter, patent, image };
    await compareValuesTruck( input);  
    return await Truck.create({ name, letter, date, patent, image });
};

export const updateTruck = async ( input ) => {
    const truck = await Truck.findOne( {_id: input._id} );
    if (!truck){
        throw new Error('No se encontró el camión para actualizar');
    }
    await compareValuesTruck(input);  
    await Truck.findOneAndUpdate({_id: input._id}, input);
    return await Truck.findOne({_id: input._id})
}

//Still with error when don´t find the data
export const deleteTruck = async ( _id ) => {
    const truck = await Truck.findOne( {_id: _id} );
    if (!truck){
        throw new Error('No se encontró el camión para eliminar');
    }
    await Truck.findOneAndDelete(  {_id: _id} );
    return await Truck.find().populate()
}