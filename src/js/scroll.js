var $scrollButton = $('.scroll');
$scrollButton.on('click', function(e) {
    e.preventDefault();
    var $link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($link).offset().top - 20
    }, 900);
});