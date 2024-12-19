const axios = require('axios');

const YELP_API_KEY = 'VEjhXWEolWpcBmDGVcnohzxOG1q_KyHp-Byw6kQBey_TXDAW0UkIYjg-63JruiyISq_M9cdF_ATXQWIa9LT2lz8yusKqajZ1At-eS4m9myUZKT2jBfzj6P_fxUZjZ3Yx';
const YELP_BASE_URL = 'https://api.yelp.com/v3/businesses/search';

const getYelpActivities = async (location, term) => {
    try {
        const response = await axios.get(YELP_BASE_URL, {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
            params: {
                location, // Ex : "Montpellier"
                term,     // Ex : "activities" ou "restaurants"
                limit: 10, // Limite des résultats (modifiable selon besoin)
            },
        });

        // Formatage des données pour le frontend
        return response.data.businesses.map((business) => ({
            id: business.id,
            name: business.name,
            location: business.location.address1 || 'Unknown location',
            category: business.categories[0]?.title || 'Unknown category',
            rating: business.rating || 'No rating',
        }));
    } catch (err) {
        console.error('Erreur lors de l’appel à l’API Yelp :', err.message);
        return [];
    }
};

module.exports = { getYelpActivities };
