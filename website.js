// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) { slideIndex = 0 }
    if (n < 0) { slideIndex = slides.length - 1 }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].getElementsByTagName("img")[0].style.width = "900px"; // Set the width
        slides[i].getElementsByTagName("img")[0].style.height = "675px";// Set the height
    }
    slides[slideIndex].style.display = "block";
}

// Automatic Slide Change
function autoSlides() {
    plusSlides(1);
    setTimeout(autoSlides, 10000); // Change image every 10 seconds
}
autoSlides();


document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('mouseover', () => {
        tile.style.transform = 'scale(1.1)';
    });
    tile.addEventListener('mouseout', () => {
        tile.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion-header, .about-accordion-header').forEach(header => {
        header.addEventListener('click', function() {
            // Remove active class from all headers except the clicked one
            /*document.querySelectorAll('.accordion-header').forEach(item => {
                if (item !== this) {
                    item.classList.remove('active');
                    item.nextElementSibling.style.display = "none";
                }
            });*/

            // Toggle active class for the clicked header
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.tile, .prj-tile').forEach(tile => {
        tile.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when user clicks outside of it
window.onclick = function(event) {
    let modals = document.getElementsByClassName('modal');
    for(let i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

