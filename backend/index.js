const express = require('express');
const path = require('path');
const apiRoute = require('./routes/api');
const PORT = process.env.PORT || 3001;
const app = express();

app.use('/api', apiRoute);
app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
