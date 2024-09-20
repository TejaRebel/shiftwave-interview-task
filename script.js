

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



