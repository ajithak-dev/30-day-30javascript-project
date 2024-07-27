const blogContainer = document.querySelector(".blog-container");
const content = document.getElementById("content").value;
const contentTextarea = document.getElementById("content");
const blogsContainer = document.querySelector(".blogs");

function revealContainer() {
  blogContainer.style.display = "block";
}

function closeContainer() {
  blogContainer.style.display = "none";
}

function publishContent() {
  const content = contentTextarea.value.trim();
  const titles = document.getElementById("title").value;
  console.log(titles);

  if (content) {
    const newBlog = document.createElement("div");
    newBlog.className = "blog";

    const title = document.createElement("h2");
    title.textContent = titles;

    const paragraph = document.createElement("p");
    paragraph.textContent = content;

    newBlog.appendChild(title);
    newBlog.appendChild(paragraph);

    blogsContainer.prepend(newBlog);

    closeContainer();
  } else {
    alert("Please enter some content before publishing.");
  }
}
