$(function () {
    const navbar = document.querySelector(".navbar");
    const navbarTogglerButton = document.querySelector(".navbar-toggler");

    $(document).scroll(function () {
        var $nav = $(".navbar");
        let isNavbarExpanded = navbarTogglerButton.getAttribute("aria-expanded");
        if (isNavbarExpanded == "false") {
            $nav.toggleClass('active', $(this).scrollTop() > $nav.height());
        } 
    });
    const navbarToggle = document.querySelector(".fas.fa-bars");

    navbarToggle.addEventListener("click", (e) => {
        var $nav = $(".navbar");
        let isNavbarExpanded = navbarTogglerButton.getAttribute("aria-expanded");
        console.log(isNavbarExpanded);
        if (isNavbarExpanded == "false") {
            navbar.classList.add('active');
        } else {
            if ($(this).scrollTop() > $nav.height() === false) {
                navbar.classList.remove('active');
            }
        }
    })
});

