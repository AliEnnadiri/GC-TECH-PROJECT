const express = require('express');
const cors = require('cors');
const activitiesRouter = require('./routes/activities');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use('/api/activities', activitiesRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
