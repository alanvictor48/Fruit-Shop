const express = require('express');
const cors = require('cors');

const fruitRouter = require('./routers/fruit.router');
const fruitCategoryRouter = require('./routers/fruitcategory.router');

const app = express();
app.use(cors())
app.use(express.json());

app.use('/fruit', fruitRouter);
app.use('/category', fruitCategoryRouter);

module.exports = app;