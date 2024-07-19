// Sample product data 
const products = [
    { name: 'Apple Seeds', category: 'Fruits', price: '$5.99' },
    { name: 'Rose Seeds', category: 'Flowers', price: '$3.99' },
    
  ];
  
  // Function to display products in a section
  function displayProducts(sectionId, category) {
    const section = document.getElementById(sectionId);
    const categoryProducts = products.filter(product => product.category === category);
    section.innerHTML = categoryProducts.map(product => `
        <div class="product">
            <h3>${product.name}</h3>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
        </div>
    `).join('');
  }
  
  // Display products in respective sections
  displayProducts('fruits', 'Fruits');
  displayProducts('flowers', 'Flowers');
  // Add more calls to displayProducts for other categories
  
  // // Function to add a seed to the cart
  function addToCart(seedType, seedName, price) {
    console.log(`Added ${seedName} (${seedType}) to cart. Price: $${price}`);
  //     // Add your logic here to update the cart
  }
  
  // // Example usage
  document.getElementById('fruits').addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart')) {
        const seedType = 'Fruit';
        const seedName = event.target.dataset.name;
        const price = event.target.dataset.price;
        addToCart(seedType, seedName, price);
    }
  });
  
  // Similar logic for other seed sections
  
  