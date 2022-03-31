const adviceNumber = document.getElementById("advice-number");
const adviceContent = document.getElementById("advice-content");
const dice = document.getElementsByClassName("dice-container")[0];

const api_url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const resp = await fetch(api_url);
  const data = await resp.json();
  // console.log(data.slip);
  // Destructuring data that we got from api
  const { id, advice } = data.slip;
  // console.log(id, advice);
  adviceNumber.textContent = id;
  adviceContent.textContent = advice;
};

dice.addEventListener("click", () => {
  getAdvice();
});
