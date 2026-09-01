/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuButton = document.querySelector(".menu-btn");

const navigation = document.querySelector(".nav-links");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("active");

});


/* =========================================
   CLOSE MENU AFTER CLICKING LINK
========================================= */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.querySelector("#contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.querySelector("#name").value;


        const message =
            document.querySelector("#form-message");


        if (name.trim() === "") {

            message.textContent =
                "Please enter your name.";

            return;

        }


        message.textContent =
            "Thank you, " + name +
            "! Your message has been received.";

        contactForm.reset();

    });

}


/* =========================================
   SCROLL ANIMATION
========================================= */

const animatedElements =
    document.querySelectorAll(
        ".skill-card, .achievement-card, .gallery-item"
    );


const observer = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },

    {
        threshold: 0.15
    }

);


animatedElements.forEach(function (element) {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(30px)";

    element.style.transition =
        "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});