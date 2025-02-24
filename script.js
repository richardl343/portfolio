// script.js
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(50px)";
    });

    const revealSections = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.75) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
                section.style.transition = "all 0.6s ease-out";
            }
        });
    };

    window.addEventListener("scroll", revealSections);
    revealSections();
});
// Show Scroll to Top Button
window.onscroll = function() { toggleScrollButton() };

function toggleScrollButton() {
    let btn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}

// Smooth Scroll to Top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
