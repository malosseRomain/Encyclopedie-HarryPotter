import { getPotions } from '../models/potionsModel'

const fetchData = async (pageNumber) => {
    try {
        let result = await getPotions(pageNumber);
        return result;
    } catch (err) {
        error.value = err.message
    }
}

const nextPage = async (pageNumber) => {
    pageNumber++;
    let result = await fetchData(pageNumber);
    return { result, pageNumber };
}

const previousPage = async (pageNumber) => {
    if (pageNumber > 1) {
        pageNumber--
        let result = await fetchData(pageNumber);
        return { result, pageNumber };
    }
}

module.exports = { fetchData, nextPage, previousPage };