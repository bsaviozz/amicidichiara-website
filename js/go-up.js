document.addEventListener("DOMContentLoaded", function() {
    const goUpButton = document.getElementById("goUp");

    // Function to check if the scroll position is past a certain point
    function checkScrollPosition() {
        if (window.scrollY > 300) { // Adjust this value to the desired scroll position
            goUpButton.style.display = "block";
        } else {
            goUpButton.style.display = "none";
        }
    }

    // Event listener for scroll events
    window.addEventListener("scroll", checkScrollPosition);

    // Initial check in case the user starts at a scrolled position
    checkScrollPosition();

    // Smooth scroll to the top when the button is clicked
    goUpButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
