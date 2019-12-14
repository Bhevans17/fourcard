$(document).ready(function() {
    $(".fa-bars").on("click", function(e) {
        $(".fa-bars").toggleClass("fa-times");
        e.preventDefault();
      });
});