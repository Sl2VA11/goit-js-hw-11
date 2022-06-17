const axios = require('axios');

export default class ApiService {
   constructor() {
      this.searchQuery = ''
      this.page = 1
   } 

   async fetchImages() { 
      try {
         const response = await axios.get(`https://pixabay.com/api/?key=28055837-436de9124f9241a9654f163e0&q=${this.searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=${this.page}`)
      
         this.incrementPage()
        
         return response

      } catch (error) {
         console.log(error);
      }
      
   }

   incrementPage() {
      this.page += 1
   }

   resetPage() {
      this.page = 1
   }

   get query() {
      return this.searchQuery
   }

   set query(newQuery) {
      this.searchQuery = newQuery
   }
}