import axios from "axios"

const address = "https://api.potterdb.com/v1";

export const getLivres = async () => {
    try {
        let result = await axios.get(address + `/books`);
        return result.data.data;
    } catch (error) {
        throw error;
    }
}


export const getPotions = async (query) => {
    try {
        let result = await axios.get(address + `/potions` + query);
        return result.data.data;
    } catch (error) {
        throw error;
    }
}

