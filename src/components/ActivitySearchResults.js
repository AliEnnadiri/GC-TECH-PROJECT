import React from 'react';

// afficher les activités
const ActivitySearchResults = ({ activities }) => {
    const handleImageError = (e) => {
        // img par défaut 
        e.target.src = 'https://via.placeholder.com/300x200.png?text=No+Image+Available';
    };

    return (
        <div className="activity-results">
            {activities.length > 0 ? (
                activities.map((activity) => (
                    <div className="activity-card" key={activity.id}>
                        <a 
                            href={`https://www.google.com/maps?q=${encodeURIComponent(activity.location)}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="activity-map-link"
                        >
                            <img 
                                src={activity.imageUrl} 
                                alt={activity.name} 
                                className="activity-image" 
                                onError={handleImageError} 
                            />
                        </a>
                        <div className="activity-info">
                            <h3>{activity.name}</h3>
                            <p><strong>Location:</strong> {activity.location}</p>
                            <p><strong>Category:</strong> {activity.category}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>Aucune activité trouvée. Essayez une autre recherche.</p>
            )}
        </div>
    );
};

export default ActivitySearchResults;
