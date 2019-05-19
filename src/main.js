window.onload = function() {
  function onContactButtonActivation(event) {
    event.stopPropagation();
    event.preventDefault();

    if (event.key === undefined || ["Space", "Enter"].includes(event.key)) {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jurajgaraj"
      });
    }
  }

  const contactButton = document.querySelector(".contact-button.screen-only");

  contactButton.addEventListener("click", onContactButtonActivation);
  contactButton.addEventListener("keypress", onContactButtonActivation);
};
