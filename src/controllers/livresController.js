import { getLivres } from '../models/livresModel'

export const fetchData = async () => {
    try {
        let result = await getLivres();
        return result;
    } catch (err) {
        error.value = err.message
    }
}