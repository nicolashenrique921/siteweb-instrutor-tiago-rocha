const whatsappNumber = "55015988335099";
const message = "Olá, Tiago! Vim pelo site e gostaria de saber mais sobre as aulas.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

document.querySelectorAll(".js-whatsapp").forEach((link) => {
  link.setAttribute("href", whatsappUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});
