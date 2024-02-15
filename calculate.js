const express = require('express');
const app = express();
const port = 3000;

// Route to handle GET requests
app.get('/sum', (req, res) => {
    // Extract the query parameters from the request URL
    const num1 = parseInt(req.query.num1);
    const num2 = parseInt(req.query.num2);

    // Check if both parameters are numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Calculate the sum
        const sum = num1 + num2;
        // Send the sum as a response
        res.send(`The sum of ${num1} and ${num2} is ${sum}`);
    } else {
        // Send an error response if any parameter is not a number
        res.status(400).send('Both parameters must be numbers');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
