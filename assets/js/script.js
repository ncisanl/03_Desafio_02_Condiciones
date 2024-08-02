hasBorder = false;

yawningCatImg = document.querySelector("#yawningCatId");

const validateBorder = () => {
  if (hasBorder) {
    hasBorder = false;
    yawningCatImg.classList.remove("border-img-yawning-cat");
  } else {
    hasBorder = true;
    yawningCatImg.classList.add("border-img-yawning-cat");
  }
};
