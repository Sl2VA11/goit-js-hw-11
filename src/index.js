

import photoCardMarkup from './js/photo-card-markup'




export const refs = {
   searchForm: document.querySelector('#search-form'),
   searchBtn: document.querySelector('.search-btn'),
   divGallery: document.querySelector('.gallery'),
}

refs.searchForm.addEventListener('submit', onSearch)



function onSearch(e) {
   e.preventDefault()

  const searchQuery = e.currentTarget.elements.searchQuery.value
   
   
   fetch(`https://pixabay.com/api/?key=28055837-436de9124f9241a9654f163e0&q=${searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=1`)
   .then(response => response.json())
      .then(hits => {
         
         photoCardMarkup(hits)
      
   })
   
}






