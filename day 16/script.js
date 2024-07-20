function loadImg() {
  for (i = 0; i <= 10; i++) {
    const category = "nature";
    const apiKey = "zbKdSGlML2K+3R3l4kTJGQ==Um9u7W0lAyqiLR2m";
    const apiUrl = `https://api.api-ninjas.com/v1/randomimage?category=${category}`;
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Api-Key": apiKey,
        Accept: "image/jpg",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return response.blob();
      })
      .then((imageBlob) => {
        const imageObjectURL = URL.createObjectURL(imageBlob);
        const imgElement = document.createElement("img");
        imgElement.src = imageObjectURL;
        document.body.appendChild(imgElement);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

loadImg();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    loadImg();
  }
});
