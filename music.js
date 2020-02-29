import data from "./data.js";

const picked = []

const randomNumber = (max, min) => {
  let number = Math.floor(Math.random() * (max - min) ) + min;

  if(!picked.includes(number)){ 
    picked.push(number)
    return number
  }else{
    return randomNumber(max,min)
  }
};

const music = () => {
  const section = document.getElementById("section");

  for (let i = 0; i<18; i++) {

    let node = document.createElement("iframe");
    node.setAttribute("src", `${data[randomNumber(data.length, 0)]}`);
    node.setAttribute("width", "300");
    node.setAttribute("height", "380");
    node.setAttribute("frameborder", "0");
    node.setAttribute("allowtransparency", "true");
    node.setAttribute("allow", "encrypted-media");
    section.appendChild(node);
  }
};

music();

