import { ref } from 'vue'
import { getLivres } from "../model/communicationAPI";


export const list = ref([])
export const errorData = ref(0);

export const fetchData = async () => {
    try {
        list.value = await getLivres();
        errorData.value = 0;
    } catch (error) {
        errorData.value = error.response.status;
    }
}
