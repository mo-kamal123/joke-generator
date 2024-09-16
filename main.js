let joke = document.getElementById("joke");
let btn = document.getElementById("btn");
let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
// console.log("console.log");
let getJoke = () => {
  joke.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      joke.innerHTML = item.joke;
      joke.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();

// fetch("https://fakestoreapi.com/products/1")
//   .then((res) => res.json())
//   .then((json) => console.log(json));

// fetch("https://api.escuelajs.co/api/v1/categories")
//   .then((res)=>res.json())
//   .then((res)=>console.log(res))