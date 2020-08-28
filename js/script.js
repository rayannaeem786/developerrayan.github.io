$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() < 80) {
            $('.navbar').css({
                'opacity': '0',
                'margin-top': '-100px'
            });
        } else {
            $('.navbar').css({
                'opacity': '1',
                'margin-top': '0px'
            });
        }
    })
});