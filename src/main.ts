import "./style.css";
import IOmbdbResponse from "./models/IOmbdResponse";
import IMovie from "./models/IMovie";
//#region localstorage

localStorage.setItem("name", "Lucas");

const myName = localStorage.getItem("name");
if (myName) {
  console.log(myName);
}
const meAndMyself = [{ name: "sebastian", age: 45, isMarried: true }];

localStorage.setItem("theList", JSON.stringify(meAndMyself));

const myself = localStorage.getItem("theList");
if (myself) {
  const personList: [] = JSON.parse(myself);
  for (let i = 0; i < personList.length; i++) {
    console.log(personList[i]);
  }
}
//#endregion

const createHTML = (movies: IMovie[]) => {
  let moviesBox = document.getElementById("movies");
  if (moviesBox) {
    moviesBox.innerHTML = "";
  }

  for (let i = 0; i < movies.length; i++) {
    let movie = document.createElement("div");
    movie.id = "movie";

    let title = document.createElement("h2");
    let poster = document.createElement("img");

    title.innerHTML = movies[i].Title;
    poster.src = movies[i].Poster;
    movie.appendChild(title);
    movie.appendChild(poster);
    moviesBox?.appendChild(movie);
  }
};

document.getElementById("searchForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  let textInput = document.getElementById("textInput") as HTMLInputElement;
  let input = textInput.value;

  fetch("http://www.omdbapi.com/?i=tt3896198&apikey=1efdfa84&s=" + input)
    .then((response) => response.json())
    .then((result: IOmbdbResponse) => {
      localStorage.setItem("movies", JSON.stringify(result.Search));
      createHTML(result.Search);

      textInput.value = "";
    });
});

//store last search
const movies: IMovie[] = JSON.parse(localStorage.getItem("movies") || "[]");

createHTML(movies);
