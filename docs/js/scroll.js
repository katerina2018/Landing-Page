var $scrollButton = $('.scroll');
$scrollButton.on('click', function(e) {
    e.preventDefault();
    var $link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($link).offset().top - 20
    }, 900);
});

const elemIitem = document.querySelectorAll(".scroll")
const menu = document.querySelector(".menu__list")


for (let i = 0; i < elemIitem.length; i += 1) {
    elemIitem[i].addEventListener("click", () => {


        if (menu.classList.contains('hidden')) {
            menu.classList.remove('hidden');
        } else {
            menu.classList.add('hidden');
        }
    });
}