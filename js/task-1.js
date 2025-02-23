const categoriesItems = document.querySelectorAll('li.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const element = item.querySelector('h2');
  const text = element.textContent;
  const subItems = item.querySelectorAll('ul li');
  console.log(`Category: ${text}`);
  console.log(`Elements: ${subItems.length}`);
});
