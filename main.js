import data from "./music_data.js";

/* 
data is an array with tons of links, let's say that data[0] is "linkin park - in the end" and so on until data[n]
data is being imported as an array with (ideally) infinite songs, as we can only display 18 elements each cycle, we need to pick those randomly and without repeating.
so in order to choose our music, we need to have a set of picked[] numbers that are going to be compared within randomNumber() before returning it.
after that, then we can say data[random_number] and should display a random and not repeated song each time you reload the page.  
*/

const picked = [];

const randomNumber = (max, min) => {
  let number = Math.floor(Math.random() * (max - min)) + min;

  if (!picked.includes(number)) { // here we are veryfing that our random number is not already in picked[]
    picked.push(number);          // if number is not picked yet, then pushes it into picked[] and return the random number
    return number;                // once the random number is returned, the element (a spotify card) can be displayed
  } else {
    return randomNumber(max, min); // if the number is already picked then, recursively look for another one that is not picked
  }
};

/* 

  getMusic() is a setter, basically sets and appends, 18 times, 18 spotify music cards that are going to be displayed on the screen,
  this function takes some time to finish, that's why is called on second place, in order to create the spotify cards they should be added as a node within section,
  notice that we also set the attribute "class" -> "hidden". setMusic() later will remove that atribute in order to display these cards.

*/

const getMusic = () => {
  const section = document.getElementById("section");

  for (let i = 0; i < 18; i++) {
    let node = document.createElement("iframe");
    node.setAttribute("src", `${data[randomNumber(data.length, 0)]}`); // data[randomNumber] is going to be a song that is not repeated
    node.setAttribute("width", "300");
    node.setAttribute("height", "380");
    node.setAttribute("frameborder", "0");
    node.setAttribute("allowtransparency", "true");
    node.setAttribute("allow", "encrypted-media");
    node.setAttribute("class", "hidden");
    section.appendChild(node);
  }
};

/*
  setSquares() appends nodes with the css class of a gray square.
  when music is loaded hideSquares() acts sets the attribute to hidden and then music is showed

*/ 

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

// methods being called

setSquares();
getMusic();

window.onload = () => {
  // once all the data is loaded
  hideSquares();
  showMusic();
};


