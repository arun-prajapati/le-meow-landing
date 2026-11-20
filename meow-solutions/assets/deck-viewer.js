for (const deck of document.querySelectorAll("[data-deck]")) {
  const controls = deck.querySelector(".deck-controls");
  const selector = controls.querySelector("select");
  const previous = controls.querySelector("[data-deck-previous]");
  const next = controls.querySelector("[data-deck-next]");
  const image = deck.querySelector(".deck-slide-wrap img");
  const slideLinks = deck.querySelectorAll("[data-deck-link]");
  const indicator = deck.querySelector("[data-deck-count]");

  function selectCurrentSlide() {
    const slide = selector.selectedOptions[0];
    image.src = slide.value;
    image.alt = slide.textContent.trim();
    for (const link of slideLinks) link.href = slide.value;
    indicator.textContent = `Slide ${selector.selectedIndex + 1} of ${selector.length}`;
    previous.disabled = selector.selectedIndex === 0;
    next.disabled = selector.selectedIndex === selector.length - 1;
  }

  selector.addEventListener("change", selectCurrentSlide);
  previous.addEventListener("click", () => {
    selector.selectedIndex -= 1;
    selectCurrentSlide();
  });
  next.addEventListener("click", () => {
    selector.selectedIndex += 1;
    selectCurrentSlide();
  });

  selectCurrentSlide();
  controls.hidden = false;
}
