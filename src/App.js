import React, { useEffect, useState } from 'react';
import './App.css';
import ActivitySearchResults from './components/ActivitySearchResults'; 
import getActivitiesFromYelp from './services/yelpService';


function App() {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const activitiesData = await getActivitiesFromYelp('Montpellier');
            setActivities(activitiesData);  
        };

        fetchActivities();
    }, []);  

    return (
        <div className="container mt-4">
            <h1 className="text-center">Search Activities near Montpellier</h1>
            <ActivitySearchResults activities={activities} />
        </div>
    );
}

export default App;


