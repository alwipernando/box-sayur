// Toggle class active untuk hamburger menu
// Ketika hamburger menu di click
const navbarNav = document.querySelector('.navbar-nav');
const hamburgerMenu = document.querySelector('#hamburger-menu');
hamburgerMenu.addEventListener('click', (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
});

// Toggle class active untuk kolom pencarian
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
document.querySelector('#search-button').addEventListener('click', (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
})

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
const shoppingCartButton = document.querySelector('#shopping-cart-button');
shoppingCartButton.addEventListener('click', (e) => {
    shoppingCart.classList.toggle('active');
    e.preventDefault();
})


// Click di luar element
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', (e) => {
    if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    };

    if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    };

    if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
    };
});


// Modal Box 
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        itemDetailModal.style.display = 'flex';
        e.preventDefault();
    })
})


// Click tombol close modal untuk menutup box modal nya
const closeIcon = document.querySelector('.close-icon');
closeIcon.addEventListener('click', (e) => {
    itemDetailModal.style.display = 'none';
    e.preventDefault();
})

// Click di luar modal
window.addEventListener('click', (e) => {
    if (e.target === itemDetailModal) {
        itemDetailModal.style.display = 'none';
    }
});


// Kolom pencarian
// const search = document.querySelector('#search');
// search.addEventListener('click', () => {
//     let search = prompt('Mesin Pencarian');
//     while (!search) {
//         search = prompt('Harus masukkan sesuatu');
//     };
//     alert('Pesan anda kami terima');
// });



