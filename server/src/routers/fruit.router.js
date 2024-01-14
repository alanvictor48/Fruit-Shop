const express = require("express");
const pool = require('../services/pg');

const fruitRouter = express.Router();

fruitRouter.get('/', async (req, res) => {
    const result = await pool.query(`SELECT f._id, f.name, f.description, f.image_url, CAST(f.price as decimal) as price, json_build_object('_id', fc._id, 'name', fc.name) as category FROM fruit f INNER JOIN fruitcategory fc ON f.category_id=fc._id`);
    const fruits = result.rows;

    res.status(200).json(fruits)
})

fruitRouter.get('/:_id', async (req, res) => {
    const { _id } = req.params;

    if(!_id) return res.status(403).json({error: 'missing id'});

    const result = await pool.query(`SELECT f._id, f.name, f.description, f.image_url, CAST(f.price as decimal) as price, json_build_object('_id', fc._id, 'name', fc.name) as category FROM fruit f INNER JOIN fruitcategory fc ON f.category_id=fc._id WHERE f._id=$1`, [+_id]);
    const fruit = result.rows[0];

    res.status(200).json(fruit)
})

module.exports = fruitRouter;