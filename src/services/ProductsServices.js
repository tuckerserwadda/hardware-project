import axios from "axios"
const apiClient = axios.create({
    baseURL: "https://my-json-server.typicode.com/tuckerserwadda/hardware-project",
    withCredentials: false,
    
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    }
})
export default{
    getProducts(){
        return apiClient.get("/productList")
    },
    getProduct(id){
        return apiClient.get("/productList/" + id)

    }
}
