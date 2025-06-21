document.addEventListener("DOMContentLoaded", function () {
    var tags = ["Samsung", "iPhone", "Monitor", "Keyboard", "Mouse", "Laptop", "Earphone"];
    for (var t of tags) addTags(t, "index.html?search=" + encodeURIComponent(t));

    $('.js-tilt').tilt({
        scale: 1.1
    });

    slideEmbla(); // Slide
    boxshadowimg(); // Bóng đổ cho hình ảnh  
    openAuthenModal(); // Open Authen Modal
    closeAuthenModal(); // Close Authen Modal
});

// $(".switch__dark").on('click', function () {
//     $("#fullpage").css("display", "block");
//     if ($("#fullpage").hasClass("night")) {
//         $("#fullpage").removeClass("night");
//         $("#switch").removeClass("switched");
//     } else {
//         $("#fullpage").addClass("night");
//         $("#switch").addClass("switched");
//     }
// });

// Switch Light Mode / Dark Mode
$(document).ready(function () {
    // Khi click vào icon, hiện fullpage
    $(".switch__dark").on('click', function (e) {
        e.stopPropagation(); // Ngăn click lan ra ngoài
        $("#fullpage").fadeIn();
    });
 
    // Click bất kỳ chỗ nào bên ngoài => ẩn
    $(document).on("click", function () {
        $("#fullpage").fadeOut();
    });
}); 

function slideEmbla() {
    const emblaNode = document.querySelector('.embla__viewport');
    if (emblaNode) {
        const autoplay = EmblaCarouselAutoplay({delay: 4000, stopOnInteraction: false });
        const embla = EmblaCarousel(emblaNode, {loop: false, speed: 5}, [autoplay]);

        document.querySelector(".embla__prev").addEventListener("click", () => {
            embla.scrollPrev();
            autoplay.reset();
        });
        document.querySelector(".embla__next").addEventListener("click", () => {
            embla.scrollNext();
            autoplay.reset();
        });

        setupDots(embla); // ← Gọi sau khi embla khởi tạo
    }
}

function setupDots(embla) {
    const dotsContainer = document.querySelector(".embla__dots");
    dotsContainer.innerHTML = ""; // ← reset nếu load lại

    const count = embla.slideNodes().length;
    for(let i = 0; i < count; i++) {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.addEventListener("click", () => embla.scrollTo(i));
        dotsContainer.appendChild(dot);
    }

    const allDots = dotsContainer.querySelectorAll(".dot");
    function updateDots() {
        allDots.forEach((dot, i) => {
            dot.classList.toggle("is-selected", i === embla.selectedScrollSnap());
        });
    }

    embla.on("select", updateDots);
    updateDots();
}

function boxshadowimg() {
    const authen__img = document.getElementById("img__authentication");
    authen__img.addEventListener("mousemove", (e) => {
        const rect = authen__img.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Tính khoảng cách từ tâm ảnh
        const offsetX = x - rect.width / 2;
        const offsetY = y - rect.height / 2;

        // Hiệu ứng bóng đổ tại điểm chuột
        const blur = 60;
        const spread = -10;
        const color = 'rgba(0, 0, 0, 0.3)';

        authen__img.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${spread}px ${color}`;

        authen__img.addEventListener("mouseleave", () => {
            authen__img.style.boxShadow = "none";
        })
    });
}
