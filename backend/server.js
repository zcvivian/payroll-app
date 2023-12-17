const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();

mongoose.connect('mongodb+srv://vivianz:FOqgzsBtdMvTubuB@cluster0.0g5fapr.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`));

app.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.send(users);
    });

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        console.log("Attempting login for:", username);

        // Find the user by username
        const user = await User.findOne({ username: username }); 
        console.log("User found:", user);

        // If no user is found, or passwords don't match
        if (!user || user.password !== password) {
            console.log("Login failed: Invalid credentials");
            return res.status(400).send({ message: "Invalid credentials" });
        }   

// If user is found and passwords match
console.log("Login successful for user:", user.username);
res.send({ message: "Login successful", user: user });

    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).send({ message: "Internal server error" });
    }
});



