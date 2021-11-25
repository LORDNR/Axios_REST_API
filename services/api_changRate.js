const axios = require('axios')
const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
    const exchangeRate = await axios(
        'http://data.fixer.io/api/latest?access_key=5381ca37b5ace5561cfaf2a3d76dc745'
    )

    return res.status(200).json(exchangeRate.data)
})

module.exports = router
