/* Native dialogs keep keyboard focus inside an open panel and return it on close. */
const dialogs = document.querySelectorAll("dialog");

document.querySelectorAll("[data-dialog]").forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const dialog = document.getElementById(trigger.dataset.dialog);
    if (!dialog || dialog.open) return;
    dialog.showModal();
    document.body.classList.add("modal-open");
  });
});

dialogs.forEach((dialog) => {
  dialog.querySelectorAll("[data-close]").forEach((button) => {
    button.addEventListener("click", () => dialog.close());
  });

  dialog.addEventListener("close", () => {
    dialog.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.currentTime = 0;
    });
    if (!document.querySelector("dialog[open]")) {
      document.body.classList.remove("modal-open");
    }
  });
});

document.getElementById("copyright-year").textContent = new Date().getFullYear();
