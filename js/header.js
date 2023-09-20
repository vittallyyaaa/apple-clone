const searchButton = document.querySelector("nav .desktop-nav .link-search");
const closeButton = document.querySelector(".search-container .link-close");
const desktopNav = document.querySelector(".desktop-nav");
const searchContainer = document.querySelector(".search-container");
const overlay = document.querySelector(".overlay");


searchButton.addEventListener("click", () => {
    desktopNav.classList.add("hide");
    searchContainer.classList.remove("hide");
    overlay.classList.add("show");
})

closeButton.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

overlay.addEventListener("click", () => {
    desktopNav.classList.remove("hide");
    searchContainer.classList.add("hide");
    overlay.classList.remove("show");
})

// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");


menuIconContainer.addEventListener("click", () => {
    navContainer.classList.toggle("active");
})

const searchBar = document.querySelector(".mobile-search-container .search-bar");
const nav = document.querySelector(".nav-container nav");
const searchInput = document.querySelector(".mobile-search-container input");
const cancelButton = document.querySelector(".mobile-search-container .cancel-button");

searchInput.addEventListener("click", () => {
    searchBar.classList.add("active");
    nav.classList.add("move-up");
    desktopNav.classList.add("move-down");
})

cancelButton.addEventListener("click", () => {
    searchBar.classList.remove("active");
    nav.classList.remove("move-up");
    desktopNav.classList.remove("move-down");
})






 // FOR COLORS

 window.addEventListener('scroll', function() {
    if (pageYOffset > 200) {
      document.querySelector('.colors').classList.add('bg')
    } else {
      document.querySelector('.colors').classList.remove('bg')
    }
  })




  //FOOTER

  const characteristicsListElem = document.querySelector('.characteristics__list');
const characteristicsItemElems = document.querySelectorAll('.characteristics__item');

characteristicsItemElems.forEach(elem => {
  if (elem.children[1].classList.contains('active')) {
    elem.children[1].style.height = elem.children[1].scrollHeight + 'px';
  }
})

const open = (button, dropDown) => {
  closeAllDrops(button, dropDown);
  dropDown.style.height = dropDown.scrollHeight + 'px';
  button.classList.add('active');
  dropDown.classList.add('active');
};

const close = (button, dropDown) => {
  button.classList.remove('active');
  dropDown.classList.remove('active');
  dropDown.style.height = '';
};

const closeAllDrops = (button, dropDown) => {
  characteristicsItemElems.forEach((elem) => {
    if (elem.children[0] !== button && elem.children[1] !== dropDown) {
      close(elem.children[0], elem.children[1]);
    }
  })
}

characteristicsListElem.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('characteristics__title')) {
    const parent = target.closest('.characteristics__item');
    const description = parent.querySelector('.characteristics__description');
    description.classList.contains('active') ?
      close(target, description) :
    open(target, description);
  } 
});
