document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll effect for internal links
    document.querySelectorAll('.navbar a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

});


/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveFunc() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
  }