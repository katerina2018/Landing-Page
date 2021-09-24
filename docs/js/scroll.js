var $scrollButton = $('.scroll');
$scrollButton.on('click', function(e) {
    e.preventDefault();
    var $link = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $($link).offset().top - 20
    }, 900);
});

// const elemIitem = document.querySelectorAll(".scroll")
// const menu = document.querySelector(".menu__list")
//     // elemIitem[0].onClick = menu.style.display = "none";
// console.log(elemIitem)

// elemIitem[0].addEventListener("click", () => {
//     console.log("Button was clicked");
//     elemIitem[0].onClick = menu.style.display = "none";
// });