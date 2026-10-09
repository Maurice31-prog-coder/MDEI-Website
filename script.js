/* =========================================================
   MDEI WEBSITE JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       NAVBAR
       ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }


    /* =====================================================
       STICKY NAVBAR SCROLL EFFECT
       ===================================================== */

    function handleNavbarScroll() {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", handleNavbarScroll);

    handleNavbarScroll();


    /* =====================================================
       ACTIVE PAGE
       ===================================================== */

    const currentPage =
        window.location.pathname.split("/").pop() || "index.html";

    const navLinks =
        document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        const linkPage = link.getAttribute("href");

        if (linkPage === currentPage) {
            link.classList.add("active");
        }

    });


    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const nav = navbar.querySelector("nav");
    const navList = navbar.querySelector(".nav-links");

    if (nav && navList) {

        /* Create menu button */

        const menuButton =
            document.createElement("button");

        menuButton.className =
            "mobile-menu-button";

        menuButton.type = "button";

        menuButton.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.innerHTML = `
            <span></span>
            <span></span>
            <span></span>
        `;

        navbar.appendChild(menuButton);


        /* Open / close menu */

        menuButton.addEventListener("click", function () {

            navbar.classList.toggle(
                "mobile-menu-open"
            );

            const isOpen =
                navbar.classList.contains(
                    "mobile-menu-open"
                );

            menuButton.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
            );

        });


        /* Close menu after clicking a link */

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navbar.classList.remove(
                    "mobile-menu-open"
                );

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuButton.setAttribute(
                    "aria-label",
                    "Open navigation menu"
                );

            });

        });

    }


    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const revealElements =
        document.querySelectorAll(
            "section, .news-card, .contact-option-card, .program-card, .impact-card"
        );

    if ("IntersectionObserver" in window) {

        revealElements.forEach(function (element) {

            element.classList.add("reveal");

        });

        const revealObserver =
            new IntersectionObserver(
                function (entries, observer) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(function (element) {

            revealObserver.observe(element);

        });

    }


    /* =====================================================
       SMOOTH ANCHOR SCROLL
       ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(function (link) {

            link.addEventListener(
                "click",
                function (event) {

                    const targetId =
                        this.getAttribute("href");

                    if (
                        !targetId ||
                        targetId === "#"
                    ) {
                        return;
                    }

                    const target =
                        document.querySelector(targetId);

                    if (!target) {
                        return;
                    }

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth"
                    });

                }
            );

        });


    /* =====================================================
       TEST MESSAGE
       ===================================================== */

    console.log(
        "MDEI JavaScript loaded successfully."
    );

});