const express = require('express');
const app = express();
const port = 3002;

// Middleware to parse JSON bodies
app.use(express.json());

const orders = [
    { id: 1, userId: 1, item: 'Laptop', amount: 1000 },
    { id: 2, userId: 2, item: 'Phone', amount: 500 }
];

// Get all orders
app.get('/orders', (req, res) => {
    res.json(orders);
});

// Create a new order
app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).json(order);
});

// Root route for welcome message
app.get('/', (req, res) => {
    res.send('Welcome to the Order Service');
});

app.listen(port, () => {
    console.log(`Order service running on http://localhost:${port}`);
});
