const express = require("express");
const pool = require('../services/pg');

const fruitCategoryRouter = express.Router();

fruitCategoryRouter.get('/', async (req, res) => {
    const result = await pool.query('SELECT * FROM fruitcategory');
    const categories = result.rows;

    res.status(200).json(categories)
})

fruitCategoryRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    if(!_id) return res.status(403).json({error: 'missing id'});

    const result = await pool.query('SELECT * FROM fruitcategory WHERE _id=$1', [+_id]);
    const category = result.rows[0];

    res.status(200).json(category)
})

module.exports = fruitCategoryRouter;