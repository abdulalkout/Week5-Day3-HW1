let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`,
];

document.addEventListener("DOMContentLoaded", function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector("#quote-of-the-day").textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener

  // Part 1
  const mainTitle = document.querySelector("#main-title");
  mainTitle.textContent = "DOM Toretto";

  // Part 2
  const body = document.querySelector("body");
  body.style.backgroundColor = "lightblue";

  // Part 3
  const favThingsList = document.querySelector("#favorite-things");
  const favThingsLast = favThingsList.lastElementChild;
  console.log(favThingsLast);
  favThingsList.removeChild(favThingsLast);

  // Part 4
  const specialTitles = document.querySelectorAll(".special-title");
  specialTitles.forEach((element) => {
    element.style.fontSize = "2rem";
  });

  // Part 5
  const pastRacesList = document.getElementById("past-races");
  const listItems = pastRacesList.getElementsByTagName("li");
  for (let i = 0; i < listItems.length; i++) {
    if (listItems[i].textContent === "Chicago") {
      pastRacesList.removeChild(listItems[i]);
      break;
    }
  }

  // Part 6
  const newLi = document.createElement("li");
  newLi.textContent = "New York";
  pastRacesList.appendChild(newLi);

  // Part 7
  const main = document.querySelector(".main");
  const newPost = document.createElement("div");
  const txt = document.createElement("h2");
  const pargraph = document.createElement("p");
  newPost.setAttribute("class", "blog-post purple");
  txt.textContent = newLi.textContent;
  txt.style.color = "white";
  pargraph.textContent = "Newwwwwwwwwwwwwwwwwwwww Yoooork";
  newPost.appendChild(txt);
  newPost.appendChild(pargraph);
  main.appendChild(newPost);

  // Part 8//
  const quoteTitle = document.querySelector("#quote-title");
  quoteTitle.addEventListener("click", (e) => {
    randomQuote();
  });

  // Part 9//
  const blogPost = document.querySelectorAll(".blog-post");
  for (let i = 0; i < blogPost.length; i++) {
    blogPost[i].addEventListener("mouseout", (e) => {
      blogPost[i].classList.toggle("purple");
    });
    blogPost[i].addEventListener("mouseenter", (e) => {
      blogPost[i].classList.toggle("red");
    });
  }
});
