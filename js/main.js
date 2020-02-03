$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('active', $(this).scrollTop() > $nav.height());
    });
});