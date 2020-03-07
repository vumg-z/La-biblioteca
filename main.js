import data from "./music_data.js";

const picked = [];

const randomNumber = (max, min) => {
  let number = Math.floor(Math.random() * (max - min)) + min;

  if (!picked.includes(number)) {
    picked.push(number);
    return number;
  } else {
    return randomNumber(max, min);
  }
};

const getMusic = () => {
  const section = document.getElementById("section");

  for (let i = 0; i < 18; i++) {
    let node = document.createElement("iframe");
    node.setAttribute("src", `${data[randomNumber(data.length, 0)]}`);
    node.setAttribute("width", "300");
    node.setAttribute("height", "380");
    node.setAttribute("frameborder", "0");
    node.setAttribute("allowtransparency", "true");
    node.setAttribute("allow", "encrypted-media");
    node.setAttribute("class", "hidden");
    section.appendChild(node);
  }
};

const setSquares = () => {
  const section = document.getElementById("section");

  for (let i = 0; i < 18; i++) {
    let node = document.createElement("div");
    node.setAttribute("class", "square");
    section.appendChild(node);
  }
};

const hideSquares = () => {
  let squares = document.querySelectorAll(".square");

  for (let i in squares) {
    if (typeof squares[i] == "object")
      squares[i].parentNode.removeChild(squares[i]);
  }
};

const showMusic = () => {
  let iframes = document.querySelectorAll(".hidden");
  for (let i in iframes) {
    iframes[i].classList = "show";
  }
};

window.onload = () => {
  // once all the data is loaded
  hideSquares();
  showMusic();
};

setSquares();
getMusic();
