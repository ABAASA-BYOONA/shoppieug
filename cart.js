// Cart functionality
let cart = JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage
let cartCount = parseInt(localStorage.getItem('cartCount')) || 0; // Load cartCount from localStorage
const cartCountElement = document.getElementById('cart-count');

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    if (cartItems && cartTotal) {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="product-card">
                <h3>${item.name}</h3>
                <p>UGX ${item.price}</p>
                <div class="quantity-controls">
                    <button class="decrease-quantity" data-index="${index}">-</button>
                    <span>${item.quantity}</span>
                    <button class="increase-quantity" data-index="${index}">+</button>
                </div>
                <button class="remove-item" data-index="${index}">Remove</button>
            </div>
        `).join('');
        cartTotal.textContent = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // Add event listeners to the new buttons
        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', increaseQuantity);
        });
        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', decreaseQuantity);
        });
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', removeItem);
        });
    }

    // Recalculate cartCount as total quantity of all items
    cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }

    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage
    localStorage.setItem('cartCount', cartCount.toString()); // Save cartCount to localStorage
}

function increaseQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    cart[index].quantity++;
    updateCart();
}

function decreaseQuantity(event) {
    const index = parseInt(event.target.dataset.index);
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        // If quantity is 1, remove the item instead
        cart.splice(index, 1);
    }
    updateCart();
}

function removeItem(event) {
    const index = parseInt(event.target.dataset.index);
    cart.splice(index, 1);
    updateCart();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        // Check if the item is already in the cart
        const existingItemIndex = cart.findIndex(item => item.name === name && item.price === price);

        if (existingItemIndex > -1) {
            // If the item exists, increase its quantity
            cart[existingItemIndex].quantity++;
        } else {
            // If the item doesn't exist, add it to the cart with quantity 1
            cart.push({ name, price, quantity: 1 });
        }
        alert(`${name} added to cart for UGX ${price}!`);
        updateCart();
    });
});