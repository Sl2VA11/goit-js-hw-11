import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { refs } from '../index.js'
import 'lazysizes';


const lightbox = new SimpleLightbox('.gallery a', { captionData: 'alt', captionDelay: 250, });



export default function addPhotoCardMarkup(hits) {

   refs.divGallery.insertAdjacentHTML('beforeend', makePhotoCardMarkup(hits))
   lightbox.refresh()

   
  
}




function makePhotoCardMarkup({ hits }) {
   
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

