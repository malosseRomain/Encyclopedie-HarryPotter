import axios from "axios"

export const getPotions = async (pageNumber) => {
    let result = await axios.get(`https://api.potterdb.com/v1/potions?page[size]=16&page[number]=${pageNumber}`);
    return result.data.data
}