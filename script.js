

// Search functionality (no changes needed)
function searchProducts() {
    console.log('searchProducts called');
    const query = document.getElementById('search-input').value;
    console.log('Query:', query);
    if (query) {
        console.log(`Searching for: ${query}`);
    } else {
        console.log('Please enter a search term!');
    }
}
// Smooth scroll for navigation (no changes needed)
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const sectionId = this.getAttribute('href').substring(1);
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Burger menu toggle 
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Initialize cart on page load
updateCart();

document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('emailInput').value;
    const successMessage = document.getElementById('successMessage');
    
    // Simulate sending email (in a real scenario, this would be a server request)
    console.log(`Subscription request for: ${email} to be sent to lostemoji9@gmail.com`);
    
    // Show success message
    successMessage.textContent = 'Thank you for subscribing! Check your email for confirmation.';
    successMessage.classList.add('show');
    
    // Clear form
    this.reset();
    
    // Hide message after 3 seconds
    setTimeout(() => {
        successMessage.classList.remove('show');
    }, 3000);
});

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const fullscreenImageContainer = document.createElement('div');
    fullscreenImageContainer.classList.add('fullscreen-image-container');
    document.body.appendChild(fullscreenImageContainer);

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = card.querySelector('img').src;
            const imgAlt = card.querySelector('img').alt;
            fullscreenImageContainer.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            fullscreenImageContainer.style.display = 'flex';
        });
    });

    fullscreenImageContainer.addEventListener('click', function() {
        fullscreenImageContainer.style.display = 'none';
        fullscreenImageContainer.innerHTML = ''; // Clear the image
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.product-card');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach((item, i) => {
            item.classList.toggle('active', i === index);
        });
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showItem(currentIndex);
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    });

    // Initialize the carousel
    showItem(currentIndex);
});

document.addEventListener('DOMContentLoaded', function() {
    const productCards = document.querySelectorAll('.product-card');
    const fullscreenImageContainer = document.createElement('div');
    fullscreenImageContainer.classList.add('fullscreen-image-container');
    document.body.appendChild(fullscreenImageContainer);

    productCards.forEach(card => {
        card.addEventListener('click', function() {
            const imgSrc = card.querySelector('img').src;
            const imgAlt = card.querySelector('img').alt;
            fullscreenImageContainer.innerHTML = `<img src="${imgSrc}" alt="${imgAlt}">`;
            fullscreenImageContainer.style.display = 'flex';
        });
    });

    fullscreenImageContainer.addEventListener('click', function() {
        fullscreenImageContainer.style.display = 'none';
        fullscreenImageContainer.innerHTML = ''; // Clear the image
    });
});