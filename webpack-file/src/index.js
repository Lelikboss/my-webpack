import example from "./images/S.W.A.G..png";
import exampleSecond from "./images/icon-close.svg";
import { sum } from "./helper/sum.js";
import "./styles/main.scss";
console.log("my-webpack");

// Create a class property without a constructor
class Game {
  name = "Violin Charades";
}
const myGame = new Game();
// Create paragraph node
const p = document.createElement("p");
p.textContent = `I like ${myGame.name}.`;

// Create heading node
const heading = document.createElement("h1");
heading.textContent = "Interesting!";

// Append SVG and heading nodes to the DOM
const app = document.querySelector("#root");
app.append(heading, p);

const img = document.createElement("img");
img.src = example;
app.append(img);

const svgImg = document.createElement("img");
svgImg.src = exampleSecond;
app.append(svgImg);

console.log(sum(2, 3));
