const url = "https://api.coinranking.com/v2/coins";
let container = document.querySelector(".container");
let crypto = document.querySelector(".cryptos");

//initial Load
async function initialLoad() {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => {
      const coins = data.data.coins;
      coins.forEach((coin) => {
        let symbol = coin.symbol;
        let name = coin.name;
        let icon = coin.iconUrl;
        let price = parseFloat(coin.price).toFixed(2);

        // Creating a coin div
        let coinDiv = document.createElement("div");
        coinDiv.classList.add("coin");

        let img = document.createElement("img");
        img.setAttribute("src", icon);
        coinDiv.appendChild(img);

        let h2 = document.createElement("h2");
        h2.textContent = `${name} (${symbol})`;
        coinDiv.appendChild(h2);

        let h1 = document.createElement("h1");
        h1.textContent = `$${price}`;
        coinDiv.appendChild(h1);

        crypto.appendChild(coinDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching or processing data:", error);
      crypto.innerHTML = `<p>Error loading data. Please try again later.</p>`; // Changed container to crypto
    });
}

//function to handle search
function handleSearch() {
  const input = document.getElementById("search").value.trim().toLowerCase();
  const coins = document.querySelectorAll(".coin");

  coins.forEach((coin) => {
    const name = coin.querySelector("h2").textContent.toLowerCase();
    const price = coin.querySelector("h1").textContent.toLowerCase();

    if (name.includes(input) || price.includes(input)) {
      coin.style.display = "flex";
    } else {
      coin.style.display = "none";
    }
  });

  const visibleCoins = document.querySelectorAll(
    '.coin[style="display: flex;"]'
  );
  const noResultsMessage = document.getElementById("no-results-message");

  if (visibleCoins.length === 0) {
    if (!noResultsMessage) {
      const message = document.createElement("p");
      message.id = "no-results-message";
      message.textContent = "No matching coins found.";
      document.querySelector(".cryptos").appendChild(message);
    }
  } else if (noResultsMessage) {
    noResultsMessage.remove();
  }
}

window.addEventListener("DOMContentLoaded", initialLoad);
document.getElementById("search").addEventListener("input", handleSearch);
