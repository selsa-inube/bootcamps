function asTabs(node) {
  const tabs = Array.from(node.children);
  const buttonContainer = document.createElement("div");
  buttonContainer.classList.add("tab-buttons-container");

  tabs.forEach((tab, index) => {
    const button = document.createElement("button");
    button.textContent = tab.getAttribute("data-tabname");
    button.classList.add("tab-button");

    button.addEventListener("click", () => showTab(index));
    buttonContainer.appendChild(button);

    tab.classList.add("tab-content");
  });

  node.insertBefore(buttonContainer, node.firstChild);

  function showTab(index) {
    tabs.forEach((tab, i) => {
      const isActive = i === index;
      tab.classList.toggle("active", isActive);
    });
  }
}

asTabs(document.querySelector("tab-panel"));
