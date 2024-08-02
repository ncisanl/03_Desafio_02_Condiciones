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

const checkSticker = () => {
  let totalStickerFinal = document.querySelector("#totalStickerId");
  let totalStickerRainbowFinal = document.querySelector("#stickerRainbowId");
  let totalStickerDogFinal = document.querySelector("#stickerDogId");
  let totalStickerPizzaFinal = document.querySelector("#stickerPizzaId");

  let contentTotalStickerFinal =
    Number(totalStickerRainbowFinal.value) +
    Number(totalStickerDogFinal.value) +
    Number(totalStickerPizzaFinal.value);

  if (contentTotalStickerFinal <= 10) {
    totalStickerFinal.innerHTML = contentTotalStickerFinal;
  } else {
    totalStickerFinal.innerHTML = "demasiados";
  }
};

const checkPassword = () => {
  let checkPassFinal = document.querySelector("#checkPassId");
  let selectPassOneFinal = document.querySelector("#selectPassOne");
  let selectPassTwoFinal = document.querySelector("#selectPassTwo");
  let selectPassTheeFinal = document.querySelector("#selectPassThee");

  let contentSelectPassFinal =
    selectPassOneFinal.value +
    selectPassTwoFinal.value +
    selectPassTheeFinal.value;

  if (contentSelectPassFinal === "911") {
    checkPassFinal.innerHTML = "password 1 correcto";
  } else if (contentSelectPassFinal === "714") {
    checkPassFinal.innerHTML = "password 2 correcto";
  } else {
    checkPassFinal.innerHTML = "password incorrecto";
  }
};
