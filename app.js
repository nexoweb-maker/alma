// ============================================
// CONFIG
// ============================================
const CONFIG = {
    whatsapp: '5492374812251',
    storeName: 'WANDA Store',
    storeAddress: 'Paunero 1512, San Miguel, Buenos Aires'
};

// ============================================
// PRODUCTS DATABASE
// ============================================
const PRODUCTS = [
    {
        id: 1,
        name: 'Remera Oversized Essential',
        category: 'remeras',
        price: 15900,
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80'
    },
    {
        id: 2,
        name: 'Jean Mom Fit High Waist',
        category: 'pantalones',
        price: 29500,
        image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=800&q=80'
    },
    {
        id: 3,
        name: 'Vestido Midi Floral Print',
        category: 'vestidos',
        price: 32900,
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80'
    },
    {
        id: 4,
        name: 'Buzo Hoodie Premium',
        category: 'buzos',
        price: 24900,
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80'
    },
    {
        id: 5,
        name: 'Crop Top Ribbed White',
        category: 'remeras',
        price: 12800,
        image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80'
    },
    {
        id: 6,
        name: 'Pantalón Cargo Utility',
        category: 'pantalones',
        price: 31900,
        image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80'
    },
    {
        id: 7,
        name: 'Vestido Negro Elegante',
        category: 'vestidos',
        price: 38900,
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=800&q=80'
    },
    {
        id: 8,
        name: 'Campera Denim Vintage',
        category: 'buzos',
        price: 42900,
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80'
    },
    {
        id: 9,
        name: 'Cartera Bandolera Leather',
        category: 'accesorios',
        price: 18900,
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80'
    },
    {
        id: 10,
        name: 'Remera Graphic Print',
        category: 'remeras',
        price: 14500,
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80'
    },
    {
        id: 11,
        name: 'Short Denim High Rise',
        category: 'pantalones',
        price: 19900,
        image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&q=80'
    },
    {
        id: 12,
        name: 'Vestido Maxi Verano',
        category: 'vestidos',
        price: 35900,
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=800&q=80'
    },
    {
        id: 13,
        name: 'Remera Básica Pack x3',
        category: 'remeras',
        price: 22900,
        image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80'
    },
    {
        id: 14,
        name: 'Jogger Fleece Comfort',
        category: 'pantalones',
        price: 27500,
        image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'
    },
    {
        id: 15,
        name: 'Cardigan Tejido Oversize',
        category: 'buzos',
        price: 33900,
        image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80'
    }
];

// ============================================
// STATE
// ============================================
let cart = [];
let filteredProducts = [...PRODUCTS];

// ============================================
// INIT
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts();
    setupEventListeners();
    updateCartUI();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Navigation
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
    
    // Scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const nav = document.getElementById('nav');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
    
    // Cart
    document.getElementById('cartToggle').addEventListener('click', openCart);
    document.getElementById('cartClose').addEventListener('click', closeCart);
    
    // Cart overlay
    document.getElementById('cart').addEventListener('click', (e) => {
        if (e.target.id === 'cart') {
            closeCart();
        }
    });
    
    // Filters
    document.getElementById('searchInput').addEventListener('input', applyFilters);
    document.getElementById('categoryFilter').addEventListener('change', applyFilters);
    
    // WhatsApp
    document.getElementById('sendOrderBtn').addEventListener('click', sendWhatsAppOrder);
    document.getElementById('clearCartBtn').addEventListener('click', clearCart);
    document.getElementById('whatsappBtn').addEventListener('click', openWhatsApp);
    document.getElementById('whatsappFloat').addEventListener('click', openWhatsApp);
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// PRODUCTS
// ============================================
function renderProducts() {
    const container = document.getElementById('products');
    container.innerHTML = '';
    
    if (filteredProducts.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 4rem 2rem; color: var(--gray-600);">
                <p style="font-size: 1.125rem;">No se encontraron productos</p>
            </div>
        `;
        return;
    }
    
    filteredProducts.forEach(product => {
        const el = document.createElement('article');
        el.className = 'product';
        el.innerHTML = `
            <div class="product-image-wrapper">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
            </div>
            <div class="product-category">${getCategoryName(product.category)}</div>
            <h3 class="product-name">${product.name}</h3>
            <div class="product-price">$${formatPrice(product.price)}</div>
            <button class="product-btn" onclick="addToCart(${product.id})">
                Agregar al carrito
            </button>
        `;
        container.appendChild(el);
    });
}

function getCategoryName(category) {
    const names = {
        'remeras': 'Remeras',
        'pantalones': 'Pantalones',
        'vestidos': 'Vestidos',
        'buzos': 'Buzos & Camperas',
        'accesorios': 'Accesorios'
    };
    return names[category] || category;
}

function applyFilters() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categoryFilter').value;
    
    filteredProducts = PRODUCTS.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(search);
        const matchesCategory = category === 'all' || product.category === category;
        return matchesSearch && matchesCategory;
    });
    
    renderProducts();
}

// ============================================
// CART
// ============================================
function addToCart(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;
    
    const existing = cart.find(item => item.id === productId);
    
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartUI();
    openCart();
    
    // Feedback visual
    const button = event.target;
    const originalText = button.textContent;
    button.textContent = 'Agregado ✓';
    button.style.background = 'var(--whatsapp)';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
    }, 1200);
}

function updateQuantity(productId, delta) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += delta;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
}

function clearCart() {
    if (cart.length === 0) return;
    
    if (confirm('¿Vaciar el carrito?')) {
        cart = [];
        saveCart();
        updateCartUI();
    }
}

function updateCartUI() {
    updateCartBadge();
    renderCartItems();
    updateCartTotal();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

function renderCartItems() {
    const container = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="cart-empty">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                </svg>
                <p style="font-size: 1.125rem; margin-bottom: 0.5rem;">Tu carrito está vacío</p>
                <p style="font-size: 0.875rem;">Agregá productos para comenzar</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <div>
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-category">${getCategoryName(item.category)}</div>
                </div>
                <div class="cart-item-price">$${formatPrice(item.price)}</div>
                <div class="cart-item-actions">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})" aria-label="Eliminar">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="3 6 5 6 21 6"/>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `$${formatPrice(total)}`;
}

function openCart() {
    document.getElementById('cart').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cart').classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// WHATSAPP
// ============================================
function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }
    
    let msg = `Hola! Quiero hacer un pedido desde *${CONFIG.storeName}*\n\n`;
    msg += `📦 *MI PEDIDO*\n\n`;
    
    cart.forEach(item => {
        msg += `• ${item.name}\n`;
        msg += `  Cantidad: ${item.quantity}\n`;
        msg += `  Precio: $${formatPrice(item.price)}\n`;
        msg += `  Subtotal: $${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    msg += `💰 *TOTAL: $${formatPrice(total)}*\n\n`;
    msg += `¿Está disponible? Gracias!`;
    
    openWhatsAppWithMessage(msg);
}

function openWhatsApp() {
    const msg = `Hola! Quiero consultar sobre productos de *${CONFIG.storeName}*`;
    openWhatsAppWithMessage(msg);
}

function openWhatsAppWithMessage(msg) {
    const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
}

// ============================================
// STORAGE
// ============================================
function saveCart() {
    try {
        localStorage.setItem('wandaCart', JSON.stringify(cart));
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

function loadCart() {
    try {
        const saved = localStorage.getItem('wandaCart');
        if (saved) {
            cart = JSON.parse(saved);
        }
    } catch (e) {
        console.error('Error loading cart:', e);
        cart = [];
    }
}

// ============================================
// UTILS
// ============================================
function formatPrice(price) {
    return price.toLocaleString('es-AR');
}

// ============================================
// CONSOLE
// ============================================
console.log('🛍️ WANDA Store loaded');
console.log(`📱 WhatsApp: ${CONFIG.whatsapp}`);
console.log(`📦 Products: ${PRODUCTS.length}`);
