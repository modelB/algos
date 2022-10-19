const button = document.querySelector("button");
const icon = document.querySelector("button i");
let clicked = false;

function click() {
  const replaceWithHeart = () => {
    icon.classList.remove("fa-circle-notch", "fa-spin");
    icon.classList.add("fa-heart");
  };
  clicked = !clicked;
  console.log({ clicked });
  if (clicked) {
    button.classList.add("filled");
    icon.classList.remove("fa-heart");
    icon.classList.add("fa-circle-notch", "fa-spin");
    setTimeout(replaceWithHeart, 1000);
  } else {
    button.classList = [];
    replaceWithHeart();
  }
}

button.addEventListener("click", click, false);
