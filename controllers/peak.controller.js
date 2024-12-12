const Peak = require('../models/peak.model.cjs')

const getPeaks = async (req, res) => {
    try {
        const peaks = await Peak.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ message: error.message })
        
    }
}

module.exports = {
    getPeaks
}