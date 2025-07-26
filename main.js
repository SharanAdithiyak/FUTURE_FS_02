// --- Auth Modal Logic (copied from products.html for full parity) ---
window.addEventListener('DOMContentLoaded', () => {
    // Auth logic
    const authModal = document.getElementById('authModal');
    const signinBtn = document.getElementById('signinBtn');
    const signupBtn = document.getElementById('signupBtn');
    const closeAuthModal = document.getElementById('closeAuthModal');
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.querySelectorAll('#switchToSignup');
    const switchToSignin = document.getElementById('switchToSignin');
    const formSignIn = document.getElementById('formSignIn');
    const formSignUp = document.getElementById('formSignUp');
    const authError = document.getElementById('authError');
    const userEmail = document.getElementById('userEmail');
    const signoutBtn = document.getElementById('signoutBtn');
    // Password toggles
    const toggleSigninPassword = document.getElementById('toggleSigninPassword');
    const toggleSignupPassword = document.getElementById('toggleSignupPassword');
    const toggleSignupConfirmPassword = document.getElementById('toggleSignupConfirmPassword');

    function showModal(form) {
        authModal.classList.remove('hidden');
        signinForm.classList.add('hidden');
        signupForm.classList.add('hidden');
        authError.classList.add('hidden');
        if (form === 'signin') signinForm.classList.remove('hidden');
        else signupForm.classList.remove('hidden');
    }
    function hideModal() {
        authModal.classList.add('hidden');
        authError.classList.add('hidden');
    }
    function showError(msg) {
        authError.textContent = msg;
        authError.classList.remove('hidden');
    }
    function setUser(email) {
        localStorage.setItem('pixelbazaarUser', email);
        userEmail.textContent = email;
        userEmail.classList.remove('hidden');
        signoutBtn.classList.remove('hidden');
        signinBtn.classList.add('hidden');
        signupBtn.classList.add('hidden');
    }
    function clearUser() {
        localStorage.removeItem('pixelbazaarUser');
        userEmail.textContent = '';
        userEmail.classList.add('hidden');
        signoutBtn.classList.add('hidden');
        signinBtn.classList.remove('hidden');
        signupBtn.classList.remove('hidden');
    }
    // Show modal
    signinBtn.onclick = () => showModal('signin');
    signupBtn.onclick = () => showModal('signup');
    closeAuthModal.onclick = hideModal;
    switchToSignup.forEach(el => el.onclick = e => { e.preventDefault(); showModal('signup'); });
    switchToSignin.onclick = e => { e.preventDefault(); showModal('signin'); };
    // Password toggles
    toggleSigninPassword.onclick = () => {
        const input = document.getElementById('signinPassword');
        input.type = input.type === 'password' ? 'text' : 'password';
        toggleSigninPassword.innerHTML = input.type === 'password' ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    };
    toggleSignupPassword.onclick = () => {
        const input = document.getElementById('signupPassword');
        input.type = input.type === 'password' ? 'text' : 'password';
        toggleSignupPassword.innerHTML = input.type === 'password' ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    };
    toggleSignupConfirmPassword.onclick = () => {
        const input = document.getElementById('signupConfirmPassword');
        input.type = input.type === 'password' ? 'text' : 'password';
        toggleSignupConfirmPassword.innerHTML = input.type === 'password' ? '<i class="fa fa-eye"></i>' : '<i class="fa fa-eye-slash"></i>';
    };
    // Sign Up
    formSignUp.onsubmit = e => {
        e.preventDefault();
        const firstName = document.getElementById('signupFirstName').value.trim();
        const lastName = document.getElementById('signupLastName').value.trim();
        const email = document.getElementById('signupEmail').value.trim();
        const phone = document.getElementById('signupPhone').value.trim();
        const password = document.getElementById('signupPassword').value;
        const confirmPassword = document.getElementById('signupConfirmPassword').value;
        if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) return showError('Please fill all fields.');
        if (password !== confirmPassword) return showError('Passwords do not match.');
        let users = JSON.parse(localStorage.getItem('pixelbazaarUsers') || '{}');
        if (users[email]) return showError('User already exists.');
        users[email] = { password, firstName, lastName, phone };
        localStorage.setItem('pixelbazaarUsers', JSON.stringify(users));
        setUser(email);
        hideModal();
    };
    // Sign In
    formSignIn.onsubmit = e => {
        e.preventDefault();
        const email = document.getElementById('signinEmail').value.trim();
        const password = document.getElementById('signinPassword').value;
        let users = JSON.parse(localStorage.getItem('pixelbazaarUsers') || '{}');
        if (!users[email] || users[email].password !== password) return showError('Invalid credentials.');
        setUser(email);
        hideModal();
    };
    // Sign Out
    signoutBtn.onclick = clearUser;
    // On load, check user
    const currentUser = localStorage.getItem('pixelbazaarUser');
    if (currentUser) setUser(currentUser);
    else clearUser();
    // Hide modal on outside click
    authModal.addEventListener('click', e => {
        if (e.target === authModal) hideModal();
    });
});

// Smooth scroll for Categories nav button
const categoriesNavBtn = document.getElementById('categoriesNavBtn');
if (categoriesNavBtn) {
  categoriesNavBtn.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.getElementById('categories-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// --- Cart Logic ---
const cartIconBtn = document.querySelector('button[aria-label="Shopping cart"]');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCart');
const cartItemsList = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutMsg = document.getElementById('checkoutMsg');

let cart = JSON.parse(localStorage.getItem('pixelbazaarCart') || '[]');

function saveCart() {
    localStorage.setItem('pixelbazaarCart', JSON.stringify(cart));
}
function renderCart() {
    cartItemsList.innerHTML = '';
    let total = 0;
    if (cart.length === 0) {
        cartItemsList.innerHTML = '<li class="text-gray-500 text-center">Your cart is empty.</li>';
    } else {
        cart.forEach(item => {
            total += item.price * item.qty;
            cartItemsList.innerHTML += `
                <li class="flex justify-between items-center mb-2">
                    <div>
                        <span class="font-semibold">${item.name}</span><br>
                        <span class="text-sm text-gray-500">Qty: ${item.qty}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-semibold">₹${(item.price * item.qty).toLocaleString()}</span>
                        <button class="remove-cart-item text-red-500 hover:text-red-700 text-lg" data-id="${item.id}">&times;</button>
                    </div>
                </li>
            `;
        });
    }
    cartTotal.textContent = '₹' + total.toLocaleString();
}
function openCart() {
    renderCart();
    checkoutMsg.classList.add('hidden');
    cartModal.classList.remove('hidden');
}
function closeCart() {
    cartModal.classList.add('hidden');
}
cartIconBtn.addEventListener('click', openCart);
closeCartBtn.addEventListener('click', closeCart);
cartModal.addEventListener('click', e => { if (e.target === cartModal) closeCart(); });

// Add to Cart
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
addToCartBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        const id = this.getAttribute('data-id');
        const name = this.getAttribute('data-name');
        const price = parseInt(this.getAttribute('data-price'));
        const existing = cart.find(item => item.id === id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ id, name, price, qty: 1 });
        }
        saveCart();
        renderCart();
        openCart();
    });
});
// Remove from Cart
cartItemsList.addEventListener('click', function(e) {
    if (e.target.classList.contains('remove-cart-item')) {
        const id = e.target.getAttribute('data-id');
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCart();
    }
});
// Checkout
checkoutBtn.addEventListener('click', function() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    renderCart();
    checkoutMsg.classList.remove('hidden');
});
// On load, render cart
renderCart();

// --- Search Logic ---
(function() {
    // Create search modal/dropdown
    let searchModal = document.createElement('div');
    searchModal.id = 'searchModal';
    searchModal.className = 'fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 hidden';
    searchModal.innerHTML = `
        <div class="bg-white p-6 rounded shadow-lg w-full max-w-sm relative">
            <input id="searchInput" type="text" placeholder="Search products..." class="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500" autofocus />
            <button id="closeSearchModal" class="absolute top-2 right-2 text-gray-400 hover:text-red-500 text-2xl">&times;</button>
        </div>
    `;
    document.body.appendChild(searchModal);

    // Use the id for the search icon button
    const searchBtn = document.getElementById('searchIconBtn');
    if (searchBtn) {
        searchBtn.addEventListener('click', function(e) {
            e.preventDefault();
            searchModal.classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('searchInput').focus();
            }, 100);
        });
    }
    document.getElementById('closeSearchModal').onclick = function() {
        searchModal.classList.add('hidden');
    };
    searchModal.addEventListener('click', function(e) {
        if (e.target === searchModal) searchModal.classList.add('hidden');
    });
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query) {
                window.location.href = `products.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
})(); 