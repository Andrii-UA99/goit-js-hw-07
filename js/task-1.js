const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

let categoryNames = '';
let categoryItemsLenght = 0;

categoryItems.forEach((elem) => {
    const categoryNames = elem.querySelector('h2').textContent;
    const categoryItemsLenght = elem.querySelectorAll('li').length;
    console.log(`Category: ${categoryNames}`);
    console.log(`Elements: ${categoryItemsLenght}`);
});
