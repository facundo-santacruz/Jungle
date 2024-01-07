import Driver from "../models/driver";

//AGREGAR CAMIÓN
export const addDriver = async( first_name, last_name, birthday, dni ) => {
    return await Driver.create({ first_name, last_name, birthday, dni });
};