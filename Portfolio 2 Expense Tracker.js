document.getElementById('expense-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the values entered by the user
    const expenseAmount = document.getElementById('expense-amount').value;
    const category = document.getElementById('expense-category').value;

    // Check if the expense amount is valid
    if (!expenseAmount || expenseAmount <= 0) {
        alert("Please enter a valid expense amount!");
        return;
    }

    // Create a result message
    const resultMessage = `You have spent £${expenseAmount} on ${category}.`;

    // Display the result on the page
    document.getElementById('result').textContent = resultMessage;

    // Optionally, reset the form after submission
    document.getElementById('expense-form').reset();
});