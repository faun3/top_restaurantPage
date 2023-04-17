const loadPage = () => {
  const location = document.querySelector("#content");

  const header = document.createElement("h1");
  header.textContent = `Sailad Dine-in & Takeaway`;

  const image = document.createElement("img");
  image.src =
    "https://images.unsplash.com/photo-1582488719899-a2a54cb479fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1086&q=80";

  const madeUpText = document.createElement("p");
  madeUpText.textContent =
    "This restaurant serves healthy dishes which (almost always) contain seafood! Enjoy beachside living from the comfort of your home or make it special by visiting our newly opened location!";

  location.appendChild(header);
  location.appendChild(image);
  location.appendChild(madeUpText);
};

export { loadPage };
