
import axios from 'axios';


const API_KEY = 'VEjhXWEolWpcBmDGVcnohzxOG1q_KyHp-Byw6kQBey_TXDAW0UkIYjg-63JruiyISq_M9cdF_ATXQWIa9LT2lz8yusKqajZ1At-eS4m9myUZKT2jBfzj6P_fxUZjZ3Yx';
const BASE_URL = 'https://api.yelp.com/v3/businesses/search';

// Récupérer les activités depuis Yelp
const getActivities = async (location) => {
    try {
        const response = await axios.get(BASE_URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
            params: {
                term: 'activities', 
                location: location, 
                radius: 5000, 
                categories: 'museums,zoos,parks', 
            },
        });

        // Transformation pour images
        const activities = response.data.businesses.map((activity) => ({
            id: activity.id,
            name: activity.name,
            location: activity.location.address1, // Adresse 
            category: activity.categories[0]?.title || 'Unknown', // Catégorie 
            imageUrl: activity.image_url || 'https://i.ytimg.com/vi/vO4AlT0bS-s/maxresdefault.jpg', // URL de l'image
        }));

        return activities;
    } catch (err) {
        console.error('Erreur lors de la récupération des activités de Yelp:', err.message);
        return [];
    }
};

export default getActivities;
