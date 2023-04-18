//Zoom Photos
function showBigImage(img) {
    var src = img.src;
    var overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    var bigImage = document.createElement("img");
    bigImage.src = src;
    bigImage.style.maxWidth = "90%";
    bigImage.style.maxHeight = "90%";
    bigImage.style.objectFit = "contain";
    overlay.appendChild(bigImage);
    document.body.appendChild(overlay);
    overlay.addEventListener("click", function() {
      document.body.removeChild(overlay);
    });
  }
  
  
  //Search
  const searchInput = document.querySelector('.search input');
  
  searchInput.addEventListener('input', function() {
    // Get the search query from the input field
    const query = this.value;
  
    // Send a request to server to search a database with the search query
  });
  
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
      });
  
  
  //Message
  const takeButtons = document.querySelectorAll('#take_button');
  
  for (const takeButton of takeButtons) {
  takeButton.addEventListener('click', () => {
    const btn = document.createElement('button');
    const i = document.createElement('i');
    const text = document.createElement('span');
    const loading = document.createElement('span');
  
    btn.classList.add('msg-btn');
    btn.addEventListener('click', (evt) => {
    evt.target.classList.add('loading');
    setTimeout(() => {
      evt.target.classList.remove('loading');
      setTimeout(() => {
        evt.target.innerHTML = 'Message sent';
      }, 10);
    }, 1500);
  });
  
    i.classList.add('fa', 'fa-paper-plane');
    text.classList.add('msg-text');
    text.innerHTML = 'Send <span style="font-style: italic; font-weight:bold"> I want this </span> Message';
    loading.classList.add('loading-animate');
  
    btn.appendChild(i);
    btn.appendChild(text);
    btn.appendChild(loading);
  
    takeButton.parentNode.replaceChild(btn, takeButton);
  });
  }