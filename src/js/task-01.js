// const categoriesEl = document.querySelector('#categories');
// console.log('Number of categories:', categoriesEl.children.length);

const itemEl = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${itemEl.length}`);

function countItemElement() {
  itemEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
  });
}

// function countItemElement() {
//   itemEl.forEach(item => {
//     console.log('Category:', item.firstElementChild.textContent);
//     console.log('Elements:', item.lastElementChild.children.length);
//   });
// }

countItemElement();
