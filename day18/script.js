async function getRecipe() {
  const search = document.querySelector("#search").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    const recipeContainer = document.querySelector("#recipe-container");

    recipeContainer.innerHTML = "";

    if (!data.meals || data.meals.length === 0) {
      console.error("No meals found");

      const message = document.createElement("p");
      message.textContent = "No meals found";
      recipeContainer.appendChild(message);
    }

    const meal = data.meals[0];
    const mealCategory = meal.strCategory;
    const mealThumb = meal.strMealThumb;
    const mealName = meal.strMeal;
    const mealInstructions = meal.strInstructions;

    const recipeDiv = document.createElement("div");
    recipeDiv.className = "recipe";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.id = "recipe-img";
    img.className = "recipe-img";
    img.src = mealThumb;

    imageDiv.appendChild(img);

    const detailsDiv = document.createElement("div");
    detailsDiv.className = "recipe-details";

    const nameDiv = document.createElement("div");
    nameDiv.className = "recipe-name";
    nameDiv.textContent = mealName;

    const categoryDiv = document.createElement("div");
    categoryDiv.className = "recipe-category";
    categoryDiv.textContent = mealCategory;

    const instructionDiv = document.createElement("div");
    instructionDiv.className = "recipe-instruction";
    instructionDiv.textContent = mealInstructions;

    detailsDiv.appendChild(nameDiv);
    detailsDiv.appendChild(categoryDiv);
    detailsDiv.appendChild(instructionDiv);

    recipeDiv.appendChild(imageDiv);
    recipeDiv.appendChild(detailsDiv);

    recipeContainer.appendChild(recipeDiv);

    console.log("Category:", mealCategory);
    console.log("Thumbnail URL:", mealThumb);
    console.log("Instructions:", mealInstructions);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
}
