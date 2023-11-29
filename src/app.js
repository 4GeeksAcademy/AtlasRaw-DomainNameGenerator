/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let prefixes = ["the", "our"];
  let adjectives = ["big", "small", "red", "blue", "great", "cool"];
  let words = ["grandma", "bear", "uppercut", "spoingus"];
  let domains = [".com", ".cat", ".es", ".us", ".io"];
  //Loop
  for (let i = 0; i < prefixes.length; i++) {
    for (let x = 0; x < adjectives.length; x++) {
      for (let j = 0; j < words.length; j++) {
        for (let y = 0; y < domains.length; y++) {
          let list = document.createElement("li");
          list.className = "text-light";
          list.innerText = `${prefixes[i]}${adjectives[x]}${words[j]}${domains[y]}`;
          document.querySelector("#domains").appendChild(list);
        }
      }
    }
  }
};
