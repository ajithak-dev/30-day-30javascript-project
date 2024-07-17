function addItem() {
  const inputName = document.querySelector("#input").value;
  const inputCost = parseFloat(document.querySelector("#cost").value);
  const inputCategory = document.querySelector("#category").value;
  const totalElement = document.querySelector(".total-amount h2");
  const expenses = document.querySelector(".expenses");
  const expense = document.createElement("div");
  const today = new Date();
  const yyyy = today.getFullYear();
  let mm = today.getMonth() + 1; // Months start at 0!
  let dd = today.getDate();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const formattedToday = dd + "/" + mm + "/" + yyyy;

  console.log(formattedToday);
  expense.classList.add("expense");
  const totalAmount = addTotal(inputCost);
  totalElement.innerHTML = `Total: $${totalAmount.toFixed(2)}`;

  expense.innerHTML = `
      <h3 class="name">${inputName}</h3>
      <h2 class="money">$${inputCost.toFixed(2)}</h2>
      <p class="category">${inputCategory}</p>
      <p class="date">Date: ${formattedToday}</p>
      <button class="remove-btn" onclick="removeItem(this, ${inputCost})">X</button>
      
      <hr />
    `;

  expenses.appendChild(expense);

  // Clear input fields after adding item
  document.querySelector("#input").value = "";
  document.querySelector("#cost").value = "";
  document.querySelector("#category").value = "Travel";
}

let sum = 0;

function addTotal(cost) {
  sum += cost;
  return sum;
}

function removeItem(button, cost) {
  const totalElement = document.querySelector(".total-amount h2");
  sum -= cost;
  totalElement.innerHTML = `Total: $${sum.toFixed(2)}`;
  const expense = button.parentElement;
  expense.remove();
}
