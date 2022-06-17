import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../index.js'
import Notiflix from 'notiflix';
import 'lazysizes';
import InfiniteScroll from 'infinite-scroll'
const lightbox = new SimpleLightbox('.gallery a', { captionData: 'alt', captionDelay: 250, });



export default function addPhotoCardMarkup(hits) {

  if (hits.total === 0) {
      return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
  } else {
     
       refs.divGallery.insertAdjacentHTML('beforeend', makePhotoCardMarkup(hits))
   lightbox.refresh()
  }
   
  
}




function makePhotoCardMarkup({hits}) {
   console.log(hits);
 
   return hits.map(
    ({ largeImageURL, webformatURL, tags, likes, views,comments, downloads }) =>
      `<div class="photo-card">
         <a class="gallery-item" href="${largeImageURL}">
            <img class=" lazyload gallery-image" data-src="${webformatURL}" alt="${tags}" loading="lazy" />
         </a>
         <div class="info">
            <p class="info-item">
               <b>Likes: </b></br>${likes}
            </p>
            <p class="info-item">
               <b>Views: </b></br>${views}
            </p>
            <p class="info-item">
               <b>Comments: </b></br>${comments}
            </p>
            <p class="info-item">
               <b>Downloads: </b></br>${downloads}
            </p>
         </div>
    </div>`
  ).join('')
  
}

