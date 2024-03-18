import axios from "axios"

export const getPersonnages = async (pageNumber) => {
    let result = await axios.get(`https://api.potterdb.com/v1/characters?page[size]=16&page[number]=${pageNumber}`);
    return result.data.data
}