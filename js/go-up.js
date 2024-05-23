document.addEventListener("DOMContentLoaded", function() {
    const goUpButton = document.getElementById("goUp");
    const chiSonoSection = document.getElementById("chisono");

    // Function to check if the "Chi Sono" section is in view
    function isSectionInView() {
        const rect = chiSonoSection.getBoundingClientRect();
        return (
            rect.top <= window.innerHeight && rect.bottom >= 0
        );
    }

    // Event listener for scroll events
    window.addEventListener("scroll", function() {
        if (isSectionInView()) {
            goUpButton.style.display = "block";
        } else {
            goUpButton.style.display = "none";
        }
    });

    // Smooth scroll to the top when the button is clicked
    goUpButton.addEventListener("click", function(event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});