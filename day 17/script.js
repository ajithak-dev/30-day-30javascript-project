const questionElement = document.querySelector(".question");
const optionsContainer = document.querySelector(".options");
const apiURL = "https://opentdb.com/api.php?amount=1";

let correctAnswer = "";

function showAlert(message, type) {
  const alertElement = document.createElement("div");
  alertElement.className = `alert alert-${type}`;
  alertElement.textContent = message;
  document.body.appendChild(alertElement);

  setTimeout(() => {
    alertElement.classList.add("show");
  }, 10);

  setTimeout(() => {
    alertElement.classList.remove("show");
    setTimeout(() => {
      alertElement.remove();
    }, 300);
  }, 3000);
}

function showLoading() {
  const loadingElement = document.createElement("div");
  loadingElement.className = "loading";
  loadingElement.innerHTML = '<div class="loading-spinner"></div>';
  document.body.appendChild(loadingElement);
  setTimeout(() => {
    loadingElement.style.display = "flex";
  }, 10);
}

function hideLoading() {
  const loadingElement = document.querySelector(".loading");
  if (loadingElement) {
    loadingElement.style.display = "none";
    setTimeout(() => {
      loadingElement.remove();
    }, 300);
  }
}

async function fetchTrivia() {
  console.log("Fetching trivia...");
  showLoading();
  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error("Network response was not ok");

    const data = await response.json();
    const trivia = data.results[0];
    console.log("Trivia Data:", trivia);

    // Update the question element
    questionElement.textContent = trivia.question;

    // Clear existing options
    optionsContainer.innerHTML = "";

    // Randomly place the correct answer in the options
    const allAnswers = [...trivia.incorrect_answers, trivia.correct_answer];
    shuffle(allAnswers);

    // Create and add options dynamically
    allAnswers.forEach((answer, index) => {
      const optionId = `option${index}`;
      const optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.name = "answer";
      optionInput.className = "option-input";
      optionInput.value = answer;
      optionInput.id = optionId;

      const optionLabel = document.createElement("label");
      optionLabel.htmlFor = optionId;
      optionLabel.textContent = answer;

      optionsContainer.appendChild(optionInput);
      optionsContainer.appendChild(optionLabel);
    });

    correctAnswer = trivia.correct_answer;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
    showAlert("Failed to fetch question. Please try again.", "error");
  } finally {
    hideLoading();
  }
}

function checkAnswer() {
  const selectedOption = document.querySelector(".option-input:checked");
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === correctAnswer) {
      showAlert("Correct!", "success");
      setTimeout(() => {
        fetchTrivia();
      }, 1500);
    } else {
      showAlert(`Incorrect. The correct answer was: ${correctAnswer}`, "error");
    }
  } else {
    showAlert("Please select an answer.", "warning");
  }
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

fetchTrivia();
