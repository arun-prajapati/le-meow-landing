const galleryDialog = document.querySelector(".screen-dialog");
const screenTitle = galleryDialog.querySelector("#screen-title");
const screenImage = galleryDialog.querySelector(".screen-dialog-image");
const screenBody = galleryDialog.querySelector(".screen-dialog-body");

for (const link of document.querySelectorAll("[data-screen]")) {
  link.addEventListener("click", (event) => {
    if (event.button !== 0 || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

    event.preventDefault();
    screenTitle.textContent = link.dataset.screen;
    screenImage.alt = `${link.dataset.screen} app screenshot`;
    screenImage.src = link.href;
    galleryDialog.showModal();
    screenBody.scrollTop = 0;
  });
}
