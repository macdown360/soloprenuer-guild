const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll("[role='tabpanel']");
const logForm = document.querySelector(".log-form");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetId = tab.dataset.tab;

    tabs.forEach((item) => {
      const isActive = item === tab;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-selected", String(isActive));
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle("is-active", isActive);
      panel.hidden = !isActive;
    });
  });
});

if (logForm) {
  logForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = logForm.querySelector("button");
    button.textContent = "記録済み / +10 XP";
    button.disabled = true;
  });
}
