const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(bodyParser.json());

// POST route for /bfhl
app.post('/bfhl', (req, res) => {
    const { full_name, dob } = req.body;
    let response = {};

    // Validate that full_name and dob are provided
    if (full_name && dob) {
        // Format the user_id
        const user_id = `${full_name.replace(' ', '_').toLowerCase()}_${dob}`;

        response = {
            user_id: user_id,
            is_success: true
        };
    } else {
        response = {
            is_success: false,
            message: 'full_name and dob are required'
        };
    }

    // Return the response
    res.json(response);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
