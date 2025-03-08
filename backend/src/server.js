const express = require('express');
const cors = require('cors');
require('dotenv').config();
const eventRoutes = require('./routes/events.routes');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', eventRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));

