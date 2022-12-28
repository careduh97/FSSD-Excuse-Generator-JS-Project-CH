/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My granma", "The turtle", "My bird", "My hamster"];
  let what = ["eat", "pissed", "crushed", "broked", "stole"];
  let object = ["my computer", "my phone", "my homework", "my clothes"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const whoRandom = Math.floor(Math.random() * who.length);
  const whatRandom = Math.floor(Math.random() * what.length);
  const objectRandom = Math.floor(Math.random() * object.length);
  const whenRandom = Math.floor(Math.random() * when.length);

  function excuseGenerator(whoIndex, whatIndex, objectIndex, whenIndex) {
    let excuseResult = `${who[whoIndex]} ${what[whatIndex]} ${object[objectIndex]} ${when[whenIndex]}.`;
    return excuseResult;
  }

  console.log(excuseGenerator(whoRandom, whatRandom, objectRandom, whenRandom)); //Solo para verificar en la terminal

  const excuseElement = document.querySelector("#excuse");
  excuseElement.innerText = excuseGenerator(
    whoRandom,
    whatRandom,
    objectRandom,
    whenRandom
  );
};
