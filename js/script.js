// Audio hovering functionality
var audio = $("audio")[0];
var skills = [
    {
    title:"HTML/SCSS/CSS/JS",
    percentage:"90%"
}
]

function submitAddress() {
    $('.contact-form').attr('action', 'https://formsubmit.co/urigross@gmail.com');
}
$(window).ready(function () {
    $('.skills-content .right .frameworks').attr('data-before','90%');
        $('.contact-form').attr('action', '');
        $(".minesweeper").mouseenter(function () {
            audio.volume = 0.5;
            audio.play();
        });
        $(".minesweeper").mouseleave(function () {
            audio.pause();
        });
        $(".contact-btn").click(function () {
            $("input[name=name]").focus();
        })
        $(window).scroll(function () {
            //  Navbar apperance toggling when scrolling down
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
            // Scroll btn apperance toggling
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            }
            else {
                $('.scroll-up-btn').removeClass("show");
            }
            if (this.scrollY > 5600) {
                $('.scroll-up-btn.show').css('bottom','100px')
            }
            else{
                $('.scroll-up-btn.show').css('bottom','10px')
            }
        });
        // slide-up script
        $('.scroll-up-btn').click(function () {
            $('html').animate({ scrollTop: 0 });
        })
        // toggle menu/navbar script
        $('.menu-btn').click(function () {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
        var currDate = new Date();
        $('.footer-year').text((currDate).getFullYear());
        // typing animation script
        var typed = new Typed(".typing", {
            strings: ["Full stack", "Frontend"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
        var typed = new Typed(".typing-2", {
            strings: ["Full stack", "Frontend"],
            typeSpeed: 100,
            backSpeed: 60,
            loop: true
        })
        /* owl-carousel script*/
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplay: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    
});