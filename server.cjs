require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const { default: Peak } = require('./models/peak.model.cjs')

const PORT = process.env.PORT

// middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// routes
// app.use('/api/products', peakRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
})

const dbURI = process.env.MONGODB_URI;

mongoose.connect(dbURI)
.then(() => {
    console.log("Connected to database!");
    app.listen(PORT, () => {
        console.log(`app listening on port ${PORT}`)
    });
})
.catch(() => {
    console.log("Connection fail")
})


// get all peaks
app.get('/api/peaks', async (req, res) => {
    try {
        const peaks = await Peak.find({})
        res.status(200).json(peaks)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// find a product by Id
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const peak = await Peak.findById(id)
        res.status(200).json(peak)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a product and post it
app.post('/api/peaks', async (req, res) => {
    try {
        const peak = await Peak.create(req.body);
        res.status(200).json(peak);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// update a peak
app.put('/api/peaks/:id', async (req, res) => {
    try {
        const { id } = req.params

        const peak = await Peak.findByIdAndUpdate(id, req.body)

        if (!peak) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedPeak = await Peak.findById(id);
        res.status(200).json(updatedPeak);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/api/peak/:id', async (req, res) => {
    try {
        const { id } = req.params
        const peak = await Product.findByIdAndDelete(id)
        if (!peak) {
            return res.status(404).json({message: "Peak not found"})
        }
        res.status(200).json({message: "Peak deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
