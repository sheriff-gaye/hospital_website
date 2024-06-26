


document.addEventListener('DOMContentLoaded', function () {
    const targetElement = document.getElementById('typewriter-container');

    const typewriter = new Typewriter(targetElement, {
        strings: [
            `Elevate your <span style="color: #c50c37;">skills</span>, advance`,
            `Skills for <span style="color: #c50c37;">career progression</span>`,
            `Forge ahead with <span style="color: #c50c37;">new skills</span>`,
            `Advance through <span style="color: #c50c37;">learned skills</span>`,
            `<span style="color: #c50c37;">Skills that propel careers</span>`,
        ]
        ,
        autoStart: true,
        loop: true,
    });
});


// change nav bar style on scroll

window.addEventListener('scroll', () => {

    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

//hide and show faqs answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //changing the plus icon

        const icon = faq.querySelector('.faq_icon i')

        if (icon.className === 'uil uil-plus') {
            icon.className = 'uil uil-minus'
        }
        else {
            icon.className = 'uil uil-plus'
        }
    })
})



//nav bar  media query open and close

const menu = document.querySelector('.nav_menu')
const openBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')


openBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";

})

closeBtn.addEventListener('click', () => {
    menu.style.display = "none";
    openBtn.style.display = "inline-block"
    closeBtn.style.display = "none"

})


if (window.innerWidth < 1024) {
    document.querySelectorAll('.nav_menu li a').forEach(navitem => {
      navitem.addEventListener('click', closeNav)
    })
  }
  



document.addEventListener("DOMContentLoaded", function() {
    // Get all the anchor links in the navigation
    const navLinks = document.querySelectorAll('.nav_menu  a');
    
    // Add click event listener to each anchor link
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
    
    // Function to handle smooth scrolling
    function smoothScroll(e) {
      e.preventDefault(); // Prevent default behavior of anchor tag
      
      const targetId = this.getAttribute('href'); // Get the target section id
      
      // Scroll smoothly to the target section
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Adjust as needed ('start', 'center', 'end', or 'nearest')
      });
    }
  });
  