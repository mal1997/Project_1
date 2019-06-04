var link = document.querySelector(".page-header__toggle")
            var nav = document.querySelector(".menu-nav")

            link.addEventListener('click', function () {
                nav.classList.toggle('menu-nav--open');
                link.classList.toggle('page-header__toggle--active')
            });

            var divisor = document.getElementById("divisor"),
                slider =
                document.getElementById("slider");

            function moveDivisor() {
                divisor.style.width = slider.value + "%";
            }