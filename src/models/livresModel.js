import axios from "axios"

export const getLivres = async () => {
    let result = await axios.get(`https://api.potterdb.com/v1/books`);
    return result.data.data
}