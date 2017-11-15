(function() {
    // variables
    let carouselIndicator = document.getElementsByClassName("carousel-indicator");
    let carouselItem = document.getElementsByClassName("carousel-item");
    let mqMobile = window.matchMedia( "(max-width: 769px)" );
    let mqTablet = window.matchMedia( "(max-width: 1024px)" );
    let isMobile = false;
    let multiplier = 100;

    // event listeners

    if (carouselIndicator.length) {
        // carousel exists on this page
        Array.from(carouselIndicator).forEach(function(element) {
            element.addEventListener('click', carousel);
        });
    
        document.getElementById("carousel-slide-left").onclick = function() {
            moveLeft()
        }
    
        document.getElementById("carousel-slide-right").onclick = function() {
            moveRight()
        }
    } else {
        // do nothing
        // console.log("this page does not have a carousel on it")
    }

    //window.onresize = checkScreenWidth;

    //checkScreenWidth(); // on load

    // functions and methods
    function carousel() {
        let idx = Array.from(carouselIndicator).indexOf(this);
        // remove active class from each carousel indicator
        Array.from(carouselIndicator).forEach(function(element) {
            element.classList.remove("active");
        });
        this.classList.add("active");
        // remove active class from each carousel item
        Array.from(carouselItem).forEach(function(element) {
            element.classList.remove("active");
        });
        carouselItem[idx].classList.add("active")
        Array.from(carouselItem).forEach(function(element) {
            element.style.transform = 'translateX(' + (0 - idx * getMultipler() ) + "%" + ')';
        });
    }

    function moveLeft() {
    
        let currentIdx = 0;
        let idx = 0;
        for (let i = 0; i < Array.from(carouselIndicator).length; i++) {
            if (Array.from(carouselIndicator)[i].classList.contains("active")) {
                currentIdx = i;
            }
        }
        if (currentIdx <= 0) {
            idx = Array.from(carouselIndicator).length - 1 ;
        } else {
            idx = currentIdx - 1;
        }
        // remove active class from each carousel indicator
        Array.from(carouselIndicator).forEach(function(element) {
            element.classList.remove("active");
        });
        carouselIndicator[idx].classList.add("active");
        // remove active class from each carousel item
        Array.from(carouselItem).forEach(function(element) {
            element.classList.remove("active");
        });
        carouselItem[idx].classList.add("active")
        Array.from(carouselItem).forEach(function(element) {
            element.style.transform = 'translateX(' + (0 - idx * getMultipler() ) + "%" + ')';
        });
    }

    function moveRight() {
        let currentIdx = 0;
        let idx = 0;
        for (let i = 0; i < Array.from(carouselIndicator).length; i++) {
            if (Array.from(carouselIndicator)[i].classList.contains("active")) {
                currentIdx = i;
            }
        }
        if (currentIdx >= Array.from(carouselIndicator).length - 1) {
            idx = 0 ;
        } else {
            idx = currentIdx + 1;
        }
        // remove active class from each carousel indicator
        Array.from(carouselIndicator).forEach(function(element) {
            element.classList.remove("active");
        });
        carouselIndicator[idx].classList.add("active");
        // remove active class from each carousel item
        Array.from(carouselItem).forEach(function(element) {
            element.classList.remove("active");
        });
        carouselItem[idx].classList.add("active")
        Array.from(carouselItem).forEach(function(element) {
            element.style.transform = 'translateX(' + (0 - idx * getMultipler() ) + "%" + ')';
        });
    }

    // function checkScreenWidth() {
    //     if (mqTablet.matches && !mqMobile.matches) {
    //         console.log("TABLET MEDIA QUERY IN JS");
    //         setTranslation( 100 );
    //     } else if (mqMobile.matches) {
    //         console.log("MOBILE MEDIA QUERY IN JS");
    //         let num = 100;
    //         setTranslation(num);
    //     }
    //     else {
    //         // window width is greater than 769px & 1024px
    //         console.log("Not mobile")
    //         setTranslation(100);
    //     }
    // }

    function setTranslation(num) {
        multiplier = num;
    }
    function getMultipler() {
        let multiplierCopy = multiplier;
        return multiplierCopy;
    }
})();