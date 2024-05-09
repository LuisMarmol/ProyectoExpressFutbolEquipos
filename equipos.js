const express = require('express');

const equiposRoutes = require('./routes/equipos-routes');

const app = express();
const port = 3001;

app.use('/api/equipos', equiposRoutes);

app.listen(port);