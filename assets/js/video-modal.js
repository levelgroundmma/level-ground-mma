(function () {
    console.log("video loaded")
    // variables
    let videoButton = document.getElementsByClassName("video-modal-text");
    let videoModal = document.getElementsByClassName("video-modal");
    let videoIsOpen = false;

    // event handlers
    if (videoButton.length) {
        Array.from(videoButton).forEach(function (element) {
            element.addEventListener('click', toggleVideoModal);
        });

        Array.from(videoModal).forEach(function (element) {
            element.addEventListener('click', toggleVideoModal);
        });
    } else {
        // do nothing
    }

    // functions
    function toggleVideoModal() {
        let idx = Array.from(videoButton).indexOf(this);
        //let idx = Array.from(videoButton).indexOf(this);
        if (idx >= 0) {
            // above idx is ok, do nothing
        } else {
            idx = Array.from(videoModal).indexOf(this);
        }
        //videoIsOpen ? videoModal.classList.add("isOpen openVideoModal") : videoModal.classList.remove("isOpen openVideoModal")
        videoModal[idx].classList.toggle("isOpen")
        videoModal[idx].classList.toggle("openVideoModal")
        videoIsOpen = !videoIsOpen;
        let initialVideoSrc = document.getElementById("videoModalIframe").getAttribute("src");
        if (videoIsOpen) {
            // initialVideoSrc
            let newVideoSrc = videoButton[idx].getAttribute("data-video-modal-src") + "?autoplay=1"
            document.getElementById("videoModalIframe").setAttribute("src", "//www.youtube.com/embed/" + newVideoSrc)
        } else {
            document.getElementById("videoModalIframe").setAttribute("src", ""); // empty source stops the video from playing
        }
    }

})();