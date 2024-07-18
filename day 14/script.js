const title = document.querySelector(".title");
const des = document.querySelector(".des");
const img = document.querySelector("#poster");

function searchMovie() {
  const search = document.querySelector("#search").value;
  const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MGI2ZjcyNDMzYTc4MzdhYjJiM2I4MWFhZmVhNGFlYiIsIm5iZiI6MTcyMTMwMzk1My43MDUxNjcsInN1YiI6IjY1YWI5YmI1ZDUxOTFmMDBhMzMwZGZmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LyJoa-7O8IoeW3PDcQ8YWVUgOz4oKnECaRl37fHJZJ8",
    },
  };

  fetch(url, options)
    .then((res) => res.json())
    .then((data) => {
      if (data.results && data.results.length > 0) {
        const movie = data.results[0];
        title.innerHTML = movie.title;
        des.innerHTML = movie.overview;
        img.setAttribute(
          "src",
          `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        );
      } else {
        title.innerHTML = "No results found";
        des.innerHTML = "";
        img.setAttribute("src", "po.jpg");
      }
    })
    .catch((err) => console.error("error:" + err));
}

document.querySelector("#btn").addEventListener("click", searchMovie);
