import { defineStore } from "pinia";

export const useCartStore = defineStore("cartStore", {
    state: () => {
        return {
            products: ["sup", "supsups"]
        }
    }, 
    getters: {
        getCount(){
            return this.products.length;
        }
    }
})