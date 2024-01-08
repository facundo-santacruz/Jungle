import Truck from '../models/truck.js';

//COMPARE IF EXIST SOME PATENT, NAME OR LETTER ON THE DATABASE
const compareValuesTruck = async ( input ) => {
    const name = await Truck.findOne( { name: input.name } );
    if (name){
        throw new Error(`El camión ${input.name} ya existe.`)
    };
    const patent = await Truck.findOne( { patent: input.patent } );
    if (patent){
        throw new Error(`La patente ${input.patent} ya existe. Corresponde al camión ${patent.name}.`)
    };
    const letter = await Truck.findOne( { letter: input.letter})
    if(letter){
        throw new Error(`La letra ${input.letter} ya existe. Corresponde al camión ${letter.name}.`)
    };
}

export const addTruck = async( name, letter, date, patent ) => {
    const input= { name, letter, patent };
    await compareValuesTruck( input);  
    return await Truck.create({ name, letter, date, patent });
};

export const updateTruck = async ( input ) => {
    const truck = await Truck.findOne( {_id: input._id} );
    if (!truck){
        throw new Error('No se encontró el camión para actualizar');
    }
    await compareValuesTruck(input);  
    return await Truck.findOneAndUpdate({_id: input._id}, input);
}