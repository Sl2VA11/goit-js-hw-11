import photoCardMarkup from './js/photo-card-markup'
import Notiflix from 'notiflix';
import ApiService from './js/api-service';
import Notiflix from 'notiflix';
import LoadMoreBtn from './js/load-more-btn'
import {onScroll, onToTopBtn} from './js/scroll-to-top'

const NewApiService = new ApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});


export const refs = {
   searchForm: document.querySelector('#search-form'),
   searchBtn: document.querySelector('.search-btn'),
   divGallery: document.querySelector('.gallery'),
   isHidden: document.querySelector('.is-hidden'),
}

refs.searchForm.addEventListener('submit' , onSearch)
loadMoreBtn.refs.button.addEventListener('click' , onLoadMore)

onScroll()
onToTopBtn()

function onSearch(e) {
   e.preventDefault()
   
   NewApiService.query = e.currentTarget.elements.searchQuery.value
;
   
   if (NewApiService.query === '') {
      return Notiflix.Notify.warning("Please, enter something in the input field");
   }

   loadMoreBtn.show()
   
   NewApiService.resetPage();
   refs.divGallery.innerHTML = '';
   fetchImages()
   
}


function fetchImages() {
   loadMoreBtn.disable()

   NewApiService.fetchImages().then(({ data }) => {
      
      if (data.total === 0) {
         console.log(data.total);
         Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
         return loadMoreBtn.hide()

      }
      
      
     

      onLoadMore()
     

   })
}


function onLoadMore() {
   
   NewApiService.fetchImages().then(({ data }) => {
      const { totalHits } = data;

      photoCardMarkup(data)
       if (refs.divGallery.children.length === totalHits) {
         
         Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
         loadMoreBtn.hide()
         return
         
      } else {
         loadMoreBtn.enable()
         Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`);
      }
       
   } );
   
   
   
   
}















