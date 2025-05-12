// Function to navigate to the homepage
function home() {
    showSection('products'); // Show the product list section
}

// Function to navigate to the cart page
function addItem() {
    showSection('cart'); // Show the cart section
    showCart(); // Display the current items in the cart
}

// Function to show a section (products, cart, etc.)
function showSection(sectionId) {
    // Hide all sections first
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    // Display the section with the matching ID
    document.getElementById(sectionId).style.display = 'block';
}

// Function to add an item to the cart
function add(itemId) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Retrieve cart from localStorage or create a new one
    const product = getProductById(itemId); // Get product details by ID

    // Check if the product already exists in the cart
    const existingItem = cart.find(item => item.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += 1; // Increase the quantity if the item is already in the cart
    } else {
        cart.push({ ...product, quantity: 1 }); // Otherwise, add the item with quantity 1
    }

    // Save the updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
}

// Function to get product details by ID
function getProductById(itemId) {
    const products = [
        { id: '1', name: 'Product 1', price: 100, description: 'Description 1', imageUrl: 'image1.jpg' },
        { id: '2', name: 'Product 2', price: 200, description: 'Description 2', imageUrl: 'image2.jpg' },
        // Add more products here
    ];

    return products.find(product => product.id === itemId); // Find product by ID
}

// Function to display the contents of the cart
function showCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    cartItems.innerHTML = ''; // Clear the cart items section
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const subtotal = item.price * item.quantity;
            total += subtotal;
            cartItems.innerHTML += `
                <p>${item.name} x ${item.quantity} = ₹${subtotal}</p>
            `;
        });
    }

    cartTotal.innerText = `Total: ₹${total}`;
}
