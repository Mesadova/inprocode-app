
const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const app = express()
const port = 3000


app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated");
})

// get all products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// find a product by Id
app.get('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// create a product and post it
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
})

// update a product
app.put('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params

        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return res.status(404).json({message: "Product not found"});
        }

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// delete a product

app.delete('/api/product/:id', async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if (!product) {
            return res.status(404).json({message: "Product not found"})
        }
        res.status(200).json({message: "Product deleted successfully"})
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

mongoose.connect("mongodb+srv://admin:admin123$@backenddb.toqjn.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database!");
    app.listen(port, () => console.log(`app listening on port ${port}`));
})
.catch(() => {
    console.log("Connection fail")
})



