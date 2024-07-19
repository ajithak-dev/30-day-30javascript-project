function getUser() {
  const user = document.querySelector("#search-bar").value;
  const name = document.querySelector(".name");
  const poster = document.querySelector("#poster");
  const bio = document.querySelector(".bio");
  const follower = document.querySelector(".Follower");
  const following = document.querySelector(".Following");
  const repo = document.querySelector(".Repos");
  url = `https://api.github.com/users/${user}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      name.innerHTML = data.login;
      poster.setAttribute("src", data.avatar_url);
      bio.innerHTML = data.bio;
      follower.innerHTML = data.followers;
      following.innerHTML = data.following;
      repo.innerHTML = data.public_repos;
    });
}
