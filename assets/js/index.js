const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

$("#enviarCorreo").click(function (e) {
  //   e.preventDefault();
  alert("El correo fue enviado correctamente...");
});

$("h4").on("dblclick", function (e) {
  //   e.preventDefault();
  $(this).css({
    color: "red",
  });
});

$(".card-title").click(function (e) {
  //   e.preventDefault();
  $(".card-text").toggle();
});
