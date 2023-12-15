function asTabs(node) {
  const tabs = Array.from(node.children);

  const tabButtons = tabs.map((tab, main) => {
    const button = createTabButton(tab.getAttribute("data-tabname"), main);
    button.addEventListener("click", () => showTab(main));
    return button;
  });

  const buttonContainer = createButtonContainer(tabButtons);
  node.insertBefore(buttonContainer, node.firstChild);

  function createTabButton(tabName, main) {
    const button = document.createElement("button");
    button.textContent = tabName;
    button.classList.add("tab-button");
    if (main === 0) {
      button.classList.add("active");
    }
    return button;
  }

  function createButtonContainer(buttons) {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("tab-buttons-container");
    buttonContainer.append(...buttons);
    return buttonContainer;
  }

  function showTab(main) {
    tabs.forEach((tab, i) => {
      const isActive = i === main;
      tab.style.display = isActive ? "block" : "none";
      tabButtons[i].classList.toggle("active", isActive);
    });
  }

  showTab(0);
}

asTabs(document.querySelector("tab-panel"));
