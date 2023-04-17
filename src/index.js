import { loadPage } from "./loadPage";
import { loadContact } from "./contact";

const clearTab = () => {
  const currentTab = document.querySelector(".currentTab");
  currentTab.replaceChildren();
};

const landingBtn = document.createElement("button");
landingBtn.setAttribute("id", "landingBtn");
landingBtn.textContent = "HOME";
landingBtn.addEventListener("click", () => {
  clearTab();
  loadPage();
});

const menuBtn = document.createElement("button");
menuBtn.setAttribute("id", "menuBtn");
menuBtn.textContent = "MENU";

const contactBtn = document.createElement("button");
contactBtn.setAttribute("id", "contactBtn");
contactBtn.textContent = "CONTACT";
contactBtn.addEventListener("click", () => {
  clearTab();
  loadContact();
});

const buttonsDiv = document.createElement("div");
buttonsDiv.classList.add("buttonsDiv");

buttonsDiv.appendChild(landingBtn);
buttonsDiv.appendChild(menuBtn);
buttonsDiv.appendChild(contactBtn);

const content = document.querySelector("#content");

const currentTab = document.createElement("div");
currentTab.setAttribute("class", "currentTab");

content.appendChild(buttonsDiv);
content.appendChild(currentTab);

loadPage();
