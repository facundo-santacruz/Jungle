import Driver from "../models/driver.js";

//AGREGAR CAMIÓN
export const addDriver = async( firstName, lastName, birthday, dni ) => {
    return await Driver.create({ firstName, lastName, birthday, dni });
};