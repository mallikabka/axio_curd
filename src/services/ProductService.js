import axios from "axios";
const PRODUCT_BASE_URL = "http://localhost:3009/products";
const USER_BASE_URL = "http://localhost:3009/users";
class ProductService {
    getProducts() {
        return axios.get(PRODUCT_BASE_URL);
    }
    getProductById(pid) {
        return axios.get(PRODUCT_BASE_URL + "/" + pid);
    }
    createProduct(product) {
        return axios.post(PRODUCT_BASE_URL, product);
    }
    updateProduct(product, id) {
        return axios.put(PRODUCT_BASE_URL + "/" + id, product);
    }
    deleteProduct(pid) {
        return axios.delete(PRODUCT_BASE_URL + "/" + pid);
    }
    getusers(){
        return axios.get(USER_BASE_URL);
    }
    createUser(user){
        return axios.post(USER_BASE_URL,user)
    }
    
}
export default new ProductService;
