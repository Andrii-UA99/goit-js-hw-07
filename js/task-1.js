const categoriesList = document.querySelector('#categories');
const categoryItems = categoriesList.querySelectorAll('.item');
console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((item) => {
    const categoryNames = item.querySelector('h2').textContent;
    const categoryItemsLenght = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryNames}`);
    console.log(`Elements: ${categoryItemsLenght}`);
});
