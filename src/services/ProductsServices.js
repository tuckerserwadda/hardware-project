import axios from "axios"
const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/tuckerserwadda/hardware-project",
    withCredentials: false,
    
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})
// pagenation limiting the number of pages to diplay
export default{
    getProducts(perPage, page){
        return apiClient.get("/productList?_limit=" + perPage + "&_page=" + page)
    },
    getProduct(id){
        return apiClient.get("/productList/" + id)

    }
}
