
import dotev from 'dotenv'
import mongoose from 'mongoose'
// Import required modules
import express from 'express';

// Create an Express application
const app = express();
dotev.config()

export const CONNECTDB = async() => {
    try {
        const url = process.env.MONGO_URI
        const conn  = await mongoose.connect(url)
        console.log('Mongodb Connected !!!')
    } catch (error) {
        
        console.log(error)
        process.exit(1)
    }
}

 CONNECTDB();
// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
