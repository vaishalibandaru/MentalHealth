const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 5000;

// Middleware to handle CORS and JSON body parsing
app.use(cors());
app.use(bodyParser.json());

// Serve static frontend files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public'))); 

// Temporary in-memory data storage (replace with a database later)
let moodLogs = [];
let gratitudeLogs = [];

// Routes

// Home page route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// API endpoint to handle mood logging
app.post('/mood', (req, res) => {
  const mood = req.body.mood;
  if (mood) {
    moodLogs.push({ mood, timestamp: new Date() });
    res.status(200).json({ message: 'Mood logged successfully', mood });
  } else {
    res.status(400).json({ message: 'Mood is required' });
  }
});

// API endpoint for gratitude journal
app.post('/gratitude', (req, res) => {
  const gratitude = req.body.gratitude;
  if (gratitude) {
    gratitudeLogs.push({ gratitude, timestamp: new Date() });
    res.status(200).json({ message: 'Gratitude entry added', gratitude });
  } else {
    res.status(400).json({ message: 'Gratitude is required' });
  }
});

// Get all mood logs (you can display them on the frontend if needed)
app.get('/moods', (req, res) => {
  res.status(200).json(moodLogs);
});

// Get all gratitude logs
app.get('/gratitude', (req, res) => {
  res.status(200).json(gratitudeLogs);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
