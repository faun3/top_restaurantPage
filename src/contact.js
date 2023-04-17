const loadContact = () => {
  const location = document.querySelector(".currentTab");

  const header = document.createElement("h1");
  header.textContent = "Get in touch";

  const phone1 = document.createElement("p");
  phone1.textContent = `For orders: +40 702 058 448`;

  const phone2 = document.createElement("p");
  phone2.textContent = `Book a table: +40 713 517 042`;

  const web1 = document.createElement("p");
  web1.textContent = "Website: you're already here!";

  const ig1 = document.createElement("p");
  ig1.textContent = "Instagram: @sailad.yum";

  location.appendChild(header);
  location.appendChild(phone1);
  location.appendChild(phone2);
  location.appendChild(web1);
  location.appendChild(ig1);
};

export { loadContact };
