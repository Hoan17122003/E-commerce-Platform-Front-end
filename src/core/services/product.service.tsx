import api from "./api.tsx";

class Productservice {

    async getProducts(pageNumber: number, pageSize: number) {
        const reponse = await api.get(`/Product`, {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize,
            },
        });
        return reponse.data;
    }
}
export default Productservice;
