let value = document.querySelectorAll(
  ".selector-container-selector-body__value"
);
let Icon = document.querySelectorAll(
  ".selector-container-selector__header__icon"
);

Icon.forEach((item) =>
  item.addEventListener("click", (event) => selectorIcon(event))
);

value.forEach((item) =>
  item.addEventListener("click", (event) => selectValue(event))
);

function selectorIcon(event) {
  event.target.parentNode.nextElementSibling.classList.toggle("activeBody");
  event.target.classList.toggle("activeIcon");
}

function selectValue(event) {
  event.target.parentNode.previousElementSibling.firstElementChild.innerText =
    event.target.innerText;
  event.target.parentNode.classList.toggle("activeBody");
  event.target.parentNode.previousElementSibling.lastElementChild.classList.toggle(
    "activeIcon"
  );
}
