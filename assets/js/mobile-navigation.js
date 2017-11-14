(function() {
    document.getElementById("mobile-nav-icon").onclick = function() {
        console.log("woooo");
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    }
})();