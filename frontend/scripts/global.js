/*----------------------------------------------------------------- */
//Navigation Bar Menu toggle
let subMenu = document.getElementById("subMenu");

function toggleMenu(){
    subMenu.classList.toggle("open-menu");
}
/*----------------------------------------------------------------- */

window.onload = function() {
/*----------------------------------------------------------------- */
//Pagination
var currentPage = 1;
var productsPerPage = 6;
var products = document.querySelectorAll('.product-card-wrapper');
var totalPages = Math.ceil(products.length / productsPerPage);

function showPage(page) {
    var startIndex = (page - 1) * productsPerPage;
    var endIndex = startIndex + productsPerPage;

    for (var i = 0; i < products.length; i++) {
        if (i >= startIndex && i < endIndex) {
            products[i].style.display = 'block';
        } else {
            products[i].style.display = 'none';
        }
    }
}

function showPagination() {
    var pagination = document.querySelector('.pagination');
    var html = '';

    for (var i = 1; i <= totalPages; i++) {
        html += '<a href="#" class="page">' + i + '</a>';
    }

    pagination.innerHTML = html;
}

function setActivePage() {
    var pages = document.querySelectorAll('.pagination .page');

    for (var i = 0; i < pages.length; i++) {
        pages[i].classList.remove('active');
    }

    pages[currentPage - 1].classList.add('active');
}

function init() {
    showPage(currentPage);
    showPagination();
    setActivePage();
}

init();

document.querySelector('.pagination').addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.classList.contains('page')) {
      currentPage = parseInt(e.target.innerText);
      showPage(currentPage);
      setActivePage();
    } else if (e.target.classList.contains('prev')) {
        if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
        setActivePage();
       }
    }
})
/*----------------------------------------------------------------- */

}