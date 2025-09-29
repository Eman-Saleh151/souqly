import { defineStore } from "pinia";
import api from "../services/api";

export const useProductsStore = defineStore("products" , {
    state : () => ({
        products: [],
        loading: false,
        error: null,
    }),
    actions : {
        async fetchProducts() {
            this.loading = true;
            this.error = null;

            try{
                const res = await api.get("/products");
                this.products = res.data
            }catch(err){
                this.error = "Failed to fetch products";
            }finally{
                this.loading = false;
            }
        }
    }
})