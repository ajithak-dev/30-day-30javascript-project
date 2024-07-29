let totalIncome = 0;
let totalExpense = 0;

document.addEventListener("DOMContentLoaded", function () {
  const showAddTransactionBtn = document.getElementById("showAddTransaction");
  const addTransactionForm = document.getElementById("addTransactionForm");
  const closeBtn = document.querySelector(".close-btn");

  showAddTransactionBtn.addEventListener("click", function () {
    addTransactionForm.style.display = "flex";
  });

  closeBtn.addEventListener("click", function () {
    addTransactionForm.style.display = "none";
  });
});

function addTransaction() {
  const name = document.getElementById("name").value;
  const category = document.getElementById("category").value;
  const amount = document.getElementById("amount").value;
  const natureIn = document.getElementById("income");
  const natureEx = document.getElementById("expense");

  let nature = "";
  let categoryColor = "";
  if (natureIn.checked) {
    nature = natureIn.value;
    categoryColor = natureIn.value;
  } else if (natureEx.checked) {
    nature = natureEx.value;
    categoryColor = natureEx.value;
  } else {
    alert("Please select either Income or Expense");
    return;
  }

  let transactionsDiv = document.querySelector(".transactions");
  let transactionDiv = document.createElement("div");
  transactionDiv.classList.add("transaction");

  let detailsDiv = document.createElement("div");
  detailsDiv.classList.add("details");

  let h1 = document.createElement("h1");
  h1.textContent = name;
  detailsDiv.appendChild(h1);

  let h2 = document.createElement("h2");
  h2.textContent = category;
  detailsDiv.appendChild(h2);

  let h3 = document.createElement("h3");
  h3.textContent = nature;
  detailsDiv.appendChild(h3);

  transactionDiv.appendChild(detailsDiv);

  let AmountDiv = document.createElement("div");
  AmountDiv.classList.add("amount");
  AmountDiv.textContent = `$${amount}`;
  if (categoryColor === "expense") {
    AmountDiv.style.color = "rgb(179, 10, 10)";
    transactionDiv.style.backgroundColor = "#f19489";
  } else {
    AmountDiv.style.color = "rgb(8, 139, 52)";
    transactionDiv.style.backgroundColor = "#9eeba4";
  }

  transactionDiv.appendChild(AmountDiv);

  transactionsDiv.appendChild(transactionDiv);

  document.getElementById("name").value = "";
  document.getElementById("category").value = "";
  document.getElementById("amount").value = "";
  natureIn.checked = false;
  natureEx.checked = false;

  document.getElementById("addTransactionForm").style.display = "none";
  calculateStatus();
}

function calculateStatus() {
  let incomeStatus = document.querySelector(".income-status");
  let expenseStatus = document.querySelector(".expenses-status");

  let latestTransaction = document.querySelector(
    ".transactions .transaction:last-child"
  );

  if (latestTransaction) {
    let amount = parseFloat(
      latestTransaction.querySelector(".amount").textContent.replace("$", "")
    );
    let nature = latestTransaction.querySelector(".details h3").textContent;

    if (nature.toLowerCase() === "income") {
      totalIncome += amount;
    } else if (nature.toLowerCase() === "expense") {
      totalExpense += amount;
    }
  }

  // Update the display
  incomeStatus.textContent = `$${totalIncome.toFixed(2)}`;
  expenseStatus.textContent = `$${totalExpense.toFixed(2)}`;
}
