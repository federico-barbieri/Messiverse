import { defineStore } from "pinia";
import data from "../assets/names.json"

export const useCartStore = defineStore("cartStore", {
    state: () => {
        return {
            products: []
        }
    }, 
    getters: {
        getCount(){
            return this.products.length;
        },
        fetchProducts(){
            let images = [];
            for (const artist of data.artists){
                this.products.push(...artist.image);
            }

        }
    }
})

