/* ==========================================================
   MOBILE MENU
========================================================== */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});


document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
    });

});


/* ==========================================================
   PROGRAMME TRACKS
========================================================== */

const tracks = document.querySelectorAll(".track");

tracks.forEach(track => {

    track.addEventListener("click", () => {

        tracks.forEach(item => {

            if (item !== track) {
                item.classList.remove("active");
            }

        });

        track.classList.toggle("active");

    });

});


/* ==========================================================
   FAQ ACCORDION
========================================================== */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isOpen = item.classList.contains("open");


        faqItems.forEach(other => {

            other.classList.remove("open");

            const otherAnswer =
                other.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });


        if (!isOpen) {

            item.classList.add("open");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


/* ==========================================================
   STAY BUTTONS
========================================================== */

const stayButtons =
    document.querySelectorAll(".stay-buttons button");

stayButtons.forEach(button => {

    button.addEventListener("click", () => {

        stayButtons.forEach(btn => {
            btn.classList.remove("selected");
        });

        button.classList.add("selected");

    });

});


/* ==========================================================
   NAVBAR SCROLL EFFECT
========================================================== */

const navbar =
    document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(11,11,11,0.97)";

    } else {

        navbar.style.background =
            "rgba(11,11,11,0.92)";

    }

});


/* ==========================================================
   REVEAL ON SCROLL
========================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .reason, .speaker-card, .pass-card"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity .7s ease, transform .7s ease";

    observer.observe(element);

});


/* ==========================================================
   REVEAL CLASS
========================================================== */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `
    .visible {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;

document.head.appendChild(revealStyle);