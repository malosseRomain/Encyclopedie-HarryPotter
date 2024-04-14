import { ref } from 'vue'
import { getPotions } from "../model/communicationAPI";
import { scrollToTop } from "../utils/actionWindow";

const itemsPerPage = 10;
const totalItems = 168; //valeur fixe récupéré sur le site web de l'API
export const totalPages = Math.ceil(totalItems / itemsPerPage);

export const list = ref([])
export const pageNumber = ref(1)
export const searchQuery = ref('');

export const msgError = ref("");
export const errorPagination = ref("");

export const msgErrorData = "Problème avec l'API";
export const msgErrorSearch = "Aucun résultat trouvé";
const msgErrorPagination = "Page non trouvée";



export const fetchData = async () => {
    try {
        const filter = searchQuery.value ? `&filter[name_cont]=${searchQuery.value}` : '';
        list.value = await getPotions(`?page[size]=${itemsPerPage}&page[number]=${pageNumber.value}${filter}`);
        scrollToTop();
        msgError.value = list.value.length === 0 ? msgErrorSearch : "";
        searchQuery.value = '';
    } catch (error) {
        msgError.value = msgErrorData;
        console.log(error.response.status);
    }
};

export const nextPage = async () => {
    pageNumber.value++;
    fetchData();
    scrollToTop();
};

export const previousPage = async () => {
    if (pageNumber.value > 1) {
        pageNumber.value--;
        fetchData();
        scrollToTop();
    }
};

export const goToPage = async () => {
    if (pageNumber.value > 0 && pageNumber.value <= totalPages) {
        fetchData();
        scrollToTop();
        errorPagination.value = "";
    } else {
        errorPagination.value = msgErrorPagination;
        setTimeout(() => {
            errorPagination.value = "";
        }, 3000);
    }
};

export const search = () => {
    pageNumber.value = 1;
    fetchData();
    scrollToTop();
    searchQuery.value = '';
};

