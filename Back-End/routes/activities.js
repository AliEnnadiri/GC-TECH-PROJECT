// backend/routes/yelp.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

// Clé API Yelp
const YELP_API_KEY = 'VEjhXWEolWpcBmDGVcnohzxOG1q_KyHp-Byw6kQBey_TXDAW0UkIYjg-63JruiyISq_M9cdF_ATXQWIa9LT2lz8yusKqajZ1At-eS4m9myUZKT2jBfzj6P_fxUZjZ3Yx';
const YELP_BASE_URL = 'https://api.yelp.com/v3/businesses/search'; 

// Endpoint pour récupérer des activités
router.get('/yelp-activities', async (req, res) => {
    const { location, term } = req.query; 
    try {
        const response = await axios.get(YELP_BASE_URL, {
            headers: { Authorization: `Bearer ${YELP_API_KEY}` },
            params: { location, term: term || 'activities' }, 
        });
        res.json(response.data.businesses); // Envoyer les résultats au frontend
    } catch (error) {
        console.error('Erreur lors de l’appel à l’API Yelp :', error.message);
        res.status(500).json({ error: 'Erreur lors de la récupération des activités' });
    }
});

module.exports = router;
