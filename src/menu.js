const loadMenu = () => {
  const location = document.querySelector(".currentTab");

  const header = document.createElement("h1");
  header.textContent = `Menu`;

  let menuDiv = document.createElement("div");
  menuDiv.setAttribute("class", "menuDiv");

  let menuItem1 = document.createElement("div");
  menuItem1.setAttribute("class", "menuItem");

  const itemName = document.createElement("p");

  const itemDescription = document.createElement("p");

  const itemImage = document.createElement("img");

  itemName.textContent = "Paella";
  itemDescription.textContent =
    "The rice and seafood classic, made with the freshest shrimp and mussels we can find, topped off with delicious seasoning. It's also high in protein!";
  itemImage.setAttribute(
    "src",
    "https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg"
  );

  menuItem1.appendChild(itemImage);
  menuItem1.appendChild(itemName);
  menuItem1.appendChild(itemDescription);
  menuDiv.appendChild(menuItem1);

  let menuItem2 = document.createElement("div");
  menuItem2.setAttribute("class", "menuItem");

  itemName.textContent = "Shrimp Po Boy";
  itemDescription.textContent =
    "Grilled shrimp gives our Po Boy a twist which sets it apart from the original. Enjoy guilt free sandwich eating thanks to our low fat remoulade without compromising on delicious, soft on the inside but perfectly crisp on the outside bread.";
  itemImage.setAttribute(
    "src",
    "https://i1.wp.com/christyirene.com/wp-content/uploads/2020/01/Grilled-Shrimp-PoBoy.jpg?fit=1024%2C683&ssl=1"
  );

  menuItem2.appendChild(itemImage);
  menuItem2.appendChild(itemName);
  menuItem2.appendChild(itemDescription);
  menuDiv.appendChild(menuItem2);

  location.appendChild(header);
  location.appendChild(menuDiv);
};

export { loadMenu };
