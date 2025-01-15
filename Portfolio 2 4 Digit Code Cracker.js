document.getElementById('code-cracker-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission

    // Get the starting number from the input
    const startingNumber = parseInt(document.getElementById('starting-number').value);

    if (isNaN(startingNumber) || startingNumber < 0 || startingNumber > 9999) {
        alert("Please enter a valid number between 0 and 9999.");
        return;
    }

    // Generate the combinations
    let output = "";
    for (let i = startingNumber; i < 10000; i++) {
        // Format the number to always have 4 digits
        const formattedNumber = i.toString().padStart(4, '0');
        output += formattedNumber + "\n";  // Add each combination to the output
    }

    // Display the result
    document.getElementById('code-output').textContent = output;
});