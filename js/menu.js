/*============================================================================
                                    ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â°velym S.
                    https://www.linkedin.com/in/evelym-santos/
  ============================================================================*/

// Navigation
// Responsive Toggle Navigation =============================================
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(-5%)') {
        nav.style.transform = 'translateX(-5%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});
  

// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

// Close the mobile menu when you click a menu item
let mobileClose = document.querySelector("#menu-mobile");
mobileClose.addEventListener("click", function () {
    if (nav.style.transform != 'translateX(-5%)') {
        nav.style.transform = 'translateX(-5%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else {
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }

    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

// When you scroll down 20px from the top of the page, you can see the button(built-in JavaScript's event  )
window.onscroll = function() {scroll()};

function scroll() {
  if (document.documentElement.scrollTop > 20) {
    document.getElementById("btn-top").style.display = "block";
  } else {
    document.getElementById("btn-top").style.display = "none";
  }
}

// When you click on the button,you will see the top of the page
function topFunction() {
  document.documentElement.scrollTop = 0;
}