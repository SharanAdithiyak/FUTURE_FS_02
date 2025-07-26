const sampleData = {
    categories: ["All", "Men", "Women", "Gadgets"],
    products: [
        // Men (21 products)
        { id: 1, name: "Men's T-Shirt", price: 20, category: "Men", img: "data:image/jpeg;base64,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", rating: 4.4, desc: "Comfortable cotton t-shirt for men.", stock: true },
        // ... (rest of the products and all JS logic from products.html)
    ]
};

// Function to filter products by category
function filterProducts(category) {
    const products = document.getElementById('products');
    const productItems = products.querySelectorAll('.product-item');
    productItems.forEach(item => {
        const productCategory = item.dataset.category;
        if (category === 'All' || productCategory === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to display products
function displayProducts(products) {
    const productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; // Clear previous products

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.dataset.category = product.category;

        productItem.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <p>Rating: ${product.rating}</p>
            <p>${product.desc}</p>
            <p>Stock: ${product.stock ? 'In Stock' : 'Out of Stock'}</p>
            <button class="add-to-cart-btn">Add to Cart</button>
        `;
        productsContainer.appendChild(productItem);
    });
}

// Function to add product to cart
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('pixelbazaarCart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem('pixelbazaarCart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
    updateCartCount();
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const cart = JSON.parse(localStorage.getItem('pixelbazaarCart')) || [];
        cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    }
}

// Function to display cart
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cart = JSON.parse(localStorage.getItem('pixelbazaarCart')) || [];

    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p>Price: $${item.price}</p>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${item.price * item.quantity}</p>
            </div>
            <button class="remove-from-cart-btn">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
    });

    if (cartTotal) {
        cartTotal.textContent = `Total: $${total.toFixed(2)}`;
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    const cart = JSON.parse(localStorage.getItem('pixelbazaarCart')) || [];
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem('pixelbazaarCart', JSON.stringify(updatedCart));
    alert('Item removed from cart!');
    displayCart();
    updateCartCount();
}

// Function to clear cart
function clearCart() {
    localStorage.removeItem('pixelbazaarCart');
    alert('Cart cleared!');
    displayCart();
    updateCartCount();
}

// Function to get URL query parameter
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Function to filter products by search term
function filterProductsBySearch(products, searchTerm) {
    if (!searchTerm) return products;
    const lower = searchTerm.toLowerCase();
    return products.filter(p =>
        p.name.toLowerCase().includes(lower) ||
        (p.desc && p.desc.toLowerCase().includes(lower))
    );
}

// Function to initialize event listeners
function init() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterProducts(button.dataset.category);
        });
    });

    document.getElementById('products').addEventListener('click', (event) => {
        const addToCartBtn = event.target.closest('.add-to-cart-btn');
        if (addToCartBtn) {
            const product = addToCartBtn.closest('.product-item').dataset;
            addToCart(product);
        }
    });

    document.getElementById('cart-link').addEventListener('click', () => {
        displayCart();
    });

    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

    document.getElementById('checkout-btn').addEventListener('click', () => {
        alert('Checkout functionality not implemented yet!');
    });

    // Initial display of products
    let productsToShow = sampleData.products;
    const searchTerm = getQueryParam('search');
    if (searchTerm) {
        productsToShow = filterProductsBySearch(productsToShow, searchTerm);
    }
    displayProducts(productsToShow);
    updateCartCount();
}

// Call init function to start the application
init(); 