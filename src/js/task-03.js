const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryEl = document.querySelector('.gallery');

const makeGallery = ({ url, alt }) => {
  return `<li class="gallery__item"><img class="gallery__img" src ='${url}' alt='${alt}' width="400px" /></li>`;
};

const galleryItemEl = images.map(makeGallery).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryItemEl);

galleryEl.style.display = 'flex';
galleryEl.style.displayWrap = 'wrap';
galleryEl.style.listStyle = 'none';
galleryEl.style.gap = '30px';
galleryEl.style.justifyContent = 'center';
galleryEl.style.alignItems = 'center';
