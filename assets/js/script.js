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
  switch (deleteCardsBtn.innerText) {
    case "Cancella le card":
      deleteCardsBtn.innerText = "Mostra le card";
      break;

    case "Mostra le card":
      deleteCardsBtn.innerText = "Cancella le card";
      break;
  }
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

const nascondiSezioneBtn = document.querySelectorAll(".nascondi-sezione");

const arrayNascondiSezioneBtn = Array.from(nascondiSezioneBtn);
arrayNascondiSezioneBtn.forEach((currentButton) => {
  currentButton.addEventListener("click", function () {
    switch (currentButton.innerText) {
      case "Nascondi sezione":
        currentButton.innerText = "Mostra sezione";
        break;

      case "Mostra sezione":
        currentButton.innerText = "Nascondi sezione";
        break;
    }
  });
});
