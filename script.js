import generateCard from "./generateCard.js";

document.querySelector("#btn").addEventListener("click", () => {
  generateCard();
});

for(let i=0; i<5; i++) {
  generateCard()
}
