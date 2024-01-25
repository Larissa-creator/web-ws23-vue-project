import { reactive} from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart ', () => {
  const products: Product[] = reactive([]);

  function addProduct(data: Product) {
    products.push(data)
    localStorage.setItem('cart', JSON.stringify(products));
  }
  function removeProduct(data: Product){
    products.forEach( (item, index) => {
      if(products.some((item) => item.name === data.name)){
        products.splice(index,1);
      }
    });
    localStorage.setItem('cart', JSON.stringify(products));
  }

  return { products, addProduct, removeProduct}
})
