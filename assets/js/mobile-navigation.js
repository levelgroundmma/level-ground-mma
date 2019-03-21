(function() {
    document.getElementById("mobile-nav-icon").onclick = function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        } else {
            this.classList.add('active');
        }
    }
})();