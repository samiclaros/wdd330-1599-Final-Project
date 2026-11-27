export function renderWithTemplate(template, parentElement, data, callback) {
  if (!parentElement) {
    return;
  }
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const response = await fetch(path);
  const template = await response.text();
  return template;
}

function setupMenuButton() {
  const hamButton = document.querySelector("#menu");
  const navigation = document.querySelector(".navigation");

  if (!hamButton || !navigation) return;
  hamButton.addEventListener("click", (e) => {
    e.preventDefault();
    navigation.classList.toggle("open");
    hamButton.classList.toggle("open");
  });
}

export async function loadHeaderFooter() {
  const headerContainer = document.getElementById("main-header");
  const headerTemplate = await loadTemplate("/partials/header.html");
  renderWithTemplate(headerTemplate, headerContainer, null, setupMenuButton);

  /* const cart = getLocalStorage('so-cart');
    const count = Array.isArray(cart) ? cart.length : 0;
    const counter = document.querySelector('.cart-count');
    if (counter) counter.textContent = count; */

  const footerContainer = document.getElementById("main-footer");
  const footerTemplate = await loadTemplate("/partials/footer.html");
  renderWithTemplate(footerTemplate, footerContainer);
}
