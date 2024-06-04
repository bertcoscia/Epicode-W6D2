const cards = document.querySelectorAll(".card");

const deleteCards = () => {
  const arrayCards = Array.from(cards);
  arrayCards.forEach((card) => {
    card.classList.toggle("d-none");
  });
};

const deleteCardsBtn = document.getElementById("deleteCardsBtn");

deleteCardsBtn.addEventListener("click", function () {
  deleteCards();
});

const viaggi = document.querySelectorAll(".viaggio");
const contaViaggiBtn = document.getElementById("contaViaggiBtn");
console.log(viaggi.length);

const contaViaggi = () => {
  window.alert(`I viaggi disponibili oggi sono ${viaggi.length}`);
};

contaViaggiBtn.addEventListener("click", function () {
  contaViaggi();
});
