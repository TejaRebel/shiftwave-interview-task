document.addEventListener('DOMContentLoaded', function() {
    var preloader = document.getElementById('preloader');
    var content = document.getElementById('content');
    
    // Simulate a delay for demonstration purposes
    setTimeout(function() {
      preloader.style.display = 'none'; 
      content.style.display = 'block';  
    }, 2000); 
  });
  
  

function handleScroll() {
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        applyStickyHeader(header);
    } else {
        resetHeader(header);
    }
}


function applyStickyHeader(header) {
    header.style.backgroundColor = 'black';
    header.style.transition = 'background-color 0.3s ease';
    header.style.position = 'sticky';
    header.style.top = '0';
    header.style.zIndex = '1000'; 
}


function resetHeader(header) {
    header.style.backgroundColor = 'transparent';
    header.style.position = 'relative'; 
}


window.addEventListener('scroll', handleScroll);



function toggleMenu() {
    const nav = document.querySelector('header nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

function changeTab(tabClass, element) {
    var allTabs = document.getElementsByClassName('tab-content-item');
    for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].style.opacity = '0';  
        setTimeout(function(tab) {
            tab.style.display = 'none';  
        }, 500, allTabs[i]);
    }

    var activeTab = document.getElementsByClassName(tabClass)[0];
    setTimeout(function() {
        activeTab.style.display = 'flex';  
        setTimeout(function() {
            activeTab.style.opacity = '1'; 
        }, 50);  
    }, 500);  

   
    var allTabLinks = document.getElementsByClassName('tab');
    for (var i = 0; i < allTabLinks.length; i++) {
        allTabLinks[i].classList.remove('tab-active');
    }

    
    element.classList.add('tab-active');
}

window.onload = function() {
    document.querySelector('.tab-active').click();  
};


// const dealImgs = document.querySelector('.deal-imgs');
// const dots = document.querySelectorAll('.dot');
// let currentIndex = 0;
// const totalCards = dots.length;

// function updateDots() {
//     dots.forEach((dot, index) => {
//         dot.classList.toggle('dot-active', index === currentIndex);
//     });
// }

// function showNextCard() {
//     currentIndex = (currentIndex + 1) % totalCards;
//     dealImgs.style.transition = 'transform 0.5s ease-in-out';
//     dealImgs.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;

//     if (currentIndex === 0) {
//         setTimeout(() => {
//             dealImgs.style.transition = 'none';
//             dealImgs.style.transform = 'translateX(0)';
//         }, 500); 
//     }

//     updateDots();
// }

// setInterval(showNextCard, 3000); 
// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         dealImgs.style.transition = 'transform 0.5s ease-in-out';
//         dealImgs.style.transform = `translateX(-${currentIndex * 100 / 3}%)`;
//         updateDots();
//     });
// });



function countUp(id, target) {
    let count = 0;
    const increment = Math.ceil(target / 100); 
    const element = document.getElementById(id);
    
    const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
            count = target;
            clearInterval(interval);
        }
        element.textContent = count + '+';
    }, 20); 
}

function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const targetId = target.querySelector('h3').id;
            const targetValue = parseInt(target.querySelector('h3').textContent);
            
            
            countUp(targetId, targetValue);
            observer.unobserve(target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
});


document.querySelectorAll('.stats-count > div').forEach(section => {
    observer.observe(section);
});




// const elementsToAnimate = document.querySelectorAll('.about, .rest-menu, .deal, .book-section, .special-sect, .feedback, .stats-count, .sub-news');


// function isElementInViewport(el) {
//     const rect = el.getBoundingClientRect();
//     return (
//         rect.top >= 0 && 
//         rect.left >= 0 && 
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
//     );
// }


// function checkScroll() {
//     elementsToAnimate.forEach((el) => {
//         if (isElementInViewport(el)) {
//             el.classList.add('animate'); 
//         }
//     });
// }


// window.addEventListener('scroll', checkScroll);


// checkScroll();


function changeTab(tabClass, element) {
    var allTabs = document.getElementsByClassName('tab-content-item');
    for (var i = 0; i < allTabs.length; i++) {
        allTabs[i].style.opacity = '0';  
        setTimeout(function(tab) {
            tab.style.display = 'none';  
        }, 500, allTabs[i]);
    }

    var activeTab = document.getElementsByClassName(tabClass)[0];
    setTimeout(function() {
        activeTab.style.display = 'flex';  
        setTimeout(function() {
            activeTab.style.opacity = '1'; 
        }, 50);  
    }, 500);  

    var allTabLinks = document.getElementsByClassName('tab');
    for (var i = 0; i < allTabLinks.length; i++) {
        allTabLinks[i].classList.remove('tab-active');
    }

    element.classList.add('tab-active');
}

function selectTab(selectElement) {
    var selectedValue = selectElement.value;
    changeTab(selectedValue, document.querySelector(`[onclick*="${selectedValue}"]`));
}

window.onload = function() {
    document.querySelector('.tab-active').click();  
};
