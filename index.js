document.addEventListener("DOMContentLoaded", function () {
    const menuItems = document.querySelectorAll("nav ul li a");
    const footerLinks = document.querySelectorAll(".footer-section ul li a");

    // Efeito hover no menu principal
    menuItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.backgroundColor = "#666";
        });

        item.addEventListener("mouseleave", function () {
            this.style.backgroundColor = "transparent";
        });
    });

    // Efeito hover nos links do rodapé
    footerLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            this.style.color = "white";
        });

        link.addEventListener("mouseleave", function () {
            this.style.color = "#ccc";
        });
    });
});
