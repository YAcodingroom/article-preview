$(".avatar-btn").click(function () {
    $(".share-section").toggleClass("d-none d-inline-block");
})

$(".avatar-btn").click(function () {
    if ($(window).width() <= 991) {
        $(".share-content").removeClass("popover-active");
        $(".mobile-btn").removeClass("d-none");
        $(".share-section").removeClass("d-none").addClass("d-block");
        $(".avatar-section").removeClass("d-block").addClass("d-none");
    }
})

$(".mobile-btn").click(function () {
    if ($(window).width() <= 991) {
        $(".share-content").addClass("popover-active");
        $(this).addClass("d-none");
        $(".share-section").addClass("d-none").removeClass("d-block");
        $(".avatar-section").addClass("d-block").removeClass("d-none");
    }
})