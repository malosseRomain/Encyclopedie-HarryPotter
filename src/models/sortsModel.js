import axios from "axios"

export const getSorts = async (pageNumber) => {
    let result = await axios.get(`https://api.potterdb.com/v1/spells?page[size]=16&page[number]=${pageNumber}`);
    return result.data.data
}