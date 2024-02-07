const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package

const app = express();
const port = 3000;

app.use(cors()); // Use the cors middleware with your options

app.use(bodyParser.json());

let credit = 0
//ipa : 172.19.5.178

app.get('/credit', (req, res) => {
    res.json(credit)
})

app.post('/topup', (req, res) => {
    const {data} = req.body;

    if (!data) {
        return res.status(400).json({ error: 'Invalid request' });
    }
    
    credit += parseInt(data)

    res.status(201).json(credit);
})
// In-memory storage for simplicity; replace this with a database in a real application
// let items = [
//   { id: 1, text: 'Item 1' },
//   { id: 2, text: 'Item 2' },
//   { id: 3, text: 'Item 3' },
// ];

// // GET all items
// app.get('/items', (req, res) => {
//   res.json(items);
// });

// // GET a specific item by ID
// app.get('/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const item = items.find((item) => item.id === itemId);

//   if (item) {
//     res.json(item);
//   } else {
//     res.status(404).json({ error: 'Item not found' });
//   }
// });

// // POST create a new item
// app.post('/items', (req, res) => {
//   const newItem = req.body;

//   if (!newItem || !newItem.text) {
//     return res.status(400).json({ error: 'Invalid request' });
//   }

//   newItem.id = items.length + 1;
//   items.push(newItem);

//   res.status(201).json(newItem);
// });

// // PUT update an existing item
// app.put('/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   const updatedItem = req.body;

//   const existingItem = items.find((item) => item.id === itemId);

//   if (!existingItem) {
//     return res.status(404).json({ error: 'Item not found' });
//   }

//   existingItem.text = updatedItem.text;

//   res.json(existingItem);
// });

// // DELETE remove an item by ID
// app.delete('/items/:id', (req, res) => {
//   const itemId = parseInt(req.params.id);
//   items = items.filter((item) => item.id !== itemId);

//   res.json({ message: 'Item deleted successfully' });
// });

// Start the server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on http://0.0.0.0:${port}`);
  });

