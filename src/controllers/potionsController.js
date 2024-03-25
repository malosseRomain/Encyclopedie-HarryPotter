import axios from "axios"

export const getPotions = async (pageNumber) => {
    try {
        let result = await axios.get(`https://api.potterdb.com/v1/potions?page[size]=10&page[number]=${pageNumber}`);
        return result.data.data;
    } catch (error) {
        throw new Error("Une erreur est survenue : " + error);
    }
}
