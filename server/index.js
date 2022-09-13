const { join } = require('path');
const fallback = require('express-history-api-fallback');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const root = join(__dirname, '..', 'dist');

app.use(express.static(root));
app.use(fallback('index.html', { root }));

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server running on port 3000`);
});
