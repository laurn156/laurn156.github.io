(() => {
  const cards = Array.from(document.querySelectorAll(".moments-card"));
  const lightbox = document.querySelector("#moments-lightbox");
  const image = lightbox.querySelector("img");
  const caption = lightbox.querySelector("figcaption");
  let activeIndex = 0;
  let opener;
  let pointerStartedOutside = false;

  function showPhoto(index) {
    activeIndex = (index + cards.length) % cards.length;
    const card = cards[activeIndex];
    image.src = card.querySelector("img").src;
    caption.textContent = card.querySelector("span").textContent;
  }

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      opener = card;
      showPhoto(index);
      lightbox.showModal();
    });
  });

  lightbox.querySelectorAll("[data-step]").forEach((button) => {
    button.addEventListener("click", () => {
      showPhoto(activeIndex + Number(button.dataset.step));
    });
  });

  lightbox.addEventListener("keydown", (event) => {
    const step = { ArrowLeft: -1, ArrowRight: 1 }[event.key];
    if (step && cards.length > 1) {
      event.preventDefault();
      showPhoto(activeIndex + step);
    }
  });

  lightbox.addEventListener("pointerdown", (event) => {
    pointerStartedOutside = !event.target.closest("img, button");
  });

  lightbox.addEventListener("click", (event) => {
    if (pointerStartedOutside && !event.target.closest("img, button")) {
      lightbox.close();
    }
    pointerStartedOutside = false;
  });

  lightbox.addEventListener("close", () => {
    opener.focus({ preventScroll: true });
  });
})();
