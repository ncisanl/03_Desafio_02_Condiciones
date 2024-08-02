hasBorder = false;
totalSticker = 0;
stickerRainbow = 0;
stickerDog = 0;
stickerPizza = 0;

yawningCatImg = document.querySelector("#yawningCatId");

totalStickerSpan = document.querySelector("#totalStickerId");
totalStickerSpan.innerHTML = totalSticker;

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

  let contentTotalStickerFinal = Number(totalStickerFinal.innerHTML);
  let contentTotalStickerRainbowFinal = Number(totalStickerRainbowFinal.value);
  let contentTotalStickerDogFinal = Number(totalStickerDogFinal.value);
  let contentTotalStickerPizzaFinal = Number(totalStickerPizzaFinal.value);

  contentTotalStickerFinal =
    contentTotalStickerRainbowFinal +
    contentTotalStickerDogFinal +
    contentTotalStickerPizzaFinal;

  if (contentTotalStickerFinal <= 10) {
    totalStickerFinal.innerHTML = contentTotalStickerFinal;
  } else {
    totalStickerFinal.innerHTML = "demasiados";
  }
};
