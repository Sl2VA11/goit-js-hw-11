
// import {fetchPhotoCard} from './js/fetch-photo-card'
import photoCardMarkup from './js/photo-card-markup'
import Notiflix from 'notiflix';



export const refs = {
   searchForm: document.querySelector('#search-form'),
   searchBtn: document.querySelector('.search-btn'),
   divGallery: document.querySelector('.gallery'),
   loadMoreBtn: document.querySelector('.load-more')
}

refs.searchForm.addEventListener('submit', inputHandler)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

let page = 1


function inputHandler(e) {
   e.preventDefault()
   refs.divGallery.innerHTML = '';
  
  let searchQuery = e.currentTarget.elements.searchQuery.value
   
   fetch(`https://pixabay.com/api/?key=28055837-436de9124f9241a9654f163e0&q=${searchQuery}&image_type=photo&safesearch=true&orientation=horizontal&per_page=40&page=1`)
   .then(response => response.json())
      .then(hits => {
        
         
         if (searchQuery === '') {
            return Notiflix.Notify.warning("Please, enter something in the input field");
         } else {
            Notiflix.Notify.success(`Hooray! We found ${hits.totalHits} images.`);
            
            photoCardMarkup(hits)
            
            
         }
         
         
          
      })
    e.currentTarget.reset() 
}



