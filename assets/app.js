function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        var header = document.getElementById("header");
        var scrollPos = window.scrollY || document.documentElement.scrollTop;
        if (scrollPos > 0) { 
            header.classList.add("small"); 
        } else {
            header.classList.remove("small");
        }
    });
});

const backToTopBtn = document.getElementById('backToTopBtn');
window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > 0) {
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

function toggleContent(button) {
    const hiddenDiv = button.parentElement.nextElementSibling;

    hiddenDiv.classList.toggle("active");

    button.classList.toggle("active");
}




// const button = document.querySelectorAll('.btn');
// const section = document.querySelectorAll('.hidden');
// let isHidden = true; 

// function toggleContent(button) {
//     const section = button.nextElementSibling;
    
//     section.classList.toggle('hidden');
    
//     button.classList.toggle('active');
// }

// const buttons = document.querySelectorAll('.btn');
// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         toggleContent(this);
//     });
// });

// // const button = document.querySelector('.btn');
// // const section = document.querySelector('.hidden');
// // let isHidden = true; 

// // function toggleContent() {
// //     isHidden = !isHidden; 
// //     section.style.display = isHidden ? 'none' : 'block'; 
// //     button.classList.toggle('active'); 
// // }

// function showHiddenContent(idSeccion) {
//     const hiddenContent = document.getElementById(`hidden-${idSeccion}`);
//     hiddenContent.style.display = hiddenContent.style.display === 'none' ? 'block' : 'none';
// }

// const buttons = document.querySelectorAll('.btn');

// buttons.forEach(button => {
//     button.addEventListener('click', function() {
//         const siblingDiv = this.nextElementSibling;
        
//         siblingDiv.classList.toggle('hidden');
//     });
// });
