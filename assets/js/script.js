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
