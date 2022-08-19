const itemEl = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${itemEl.length}`);

function countItemElement() {
  itemEl.forEach(item => {
    console.log('Category:', item.querySelector('h2').textContent);
    console.log('Elements:', item.querySelectorAll('li').length);
  });
}

countItemElement();
