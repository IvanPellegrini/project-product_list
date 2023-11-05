const sectionEl = document.querySelector('.product__cards');
const btnContainer = document.querySelector('.btn-container');

// Generating cards and populating with data from products.js file
const displayProducts = (items) => {
  const displayProduct = items.map(
    (item) =>
      `<article class="product-item">
          <img src=${item.thumbnail} alt=${item.title}  class="photo" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.description}
            </p>
          </div>
        </article>`
  ).join("")

  sectionEl.innerHTML = displayProduct;
};


// Generating buttons for every category from product.js file
const displayButtons = () => {
  const categories = ['all'];

  products.forEach((item) => {
    if (!categories.includes(item.category)) {
      categories.push(item.category);
    }
  });

  //Generating HTML for buttons
  const categoryBtns = categories
    .map((category) => `<button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>`
    ) .join('');

  btnContainer.innerHTML = categoryBtns;

  // Adding eventListener for every button with condition for category
  btnContainer.addEventListener('click', (btn) => {
    if (btn.target.className == 'filter-btn') {
      const category = btn.target.dataset.id;
      const productCategory = products.filter(
        (item) => item.category === category
      );
      if (category === 'all') {
        displayProducts(products);
      } else {
        displayProducts(productCategory);
      }
    }
  });
};

  displayProducts(products);
  displayButtons();


// Creating sticky header on scroll by adding class "sticky" from style.css
const headerEl = document.getElementById("myHeader");

// Get the offset position of the navbar
const sticky = headerEl.offsetHeight;

// Add the sticky class to the header when you reach its scroll position. 
 //Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.scrollY > sticky) {
    headerEl.classList.add("sticky");
  } else {
    headerEl.classList.remove("sticky");
  }
}

window.onscroll = function() {
  myFunction();
};