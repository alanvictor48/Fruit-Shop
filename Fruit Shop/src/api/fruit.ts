// import axios from "./axios";

import { Fruit } from "@/models/interfaces/fruit"
import fruits from './Mock/fruits.json';
import { categoriesMap } from "./categories";
import axios from "./axios";

const fruitsFetched: Fruit[] = fruits.map((fruit: any) => {
    return {
        ...fruit,
        category: {
            _id: fruit.category,
            name: categoriesMap.get(fruit.category)
        }
    }
})

interface FruitFetched extends Omit<Fruit, 'price'> {
    price: string
}

const changeFruit = (item: FruitFetched): Fruit => {
    return {
        _id: item._id,
        name: item.name,
        description: item.description,
        image_url: item.image_url,
        price: parseFloat(item.price),
        category: item.category
    }
}

async function fetchFruits() : Promise<Fruit[]> {
    const result = await axios.get('/fruit');
    const fruits = result.data.map((item: FruitFetched) => changeFruit(item))
    
    return fruits;
}

async function fetchFruit(_id: number) : Promise<Fruit> {
    // const fruit = fruitsFetched.find(item => item._id === _id);
    // if(!fruit) throw new Error('Not found');

    // return fruit;
    const result = await axios.get(`/fruit/${_id}`);
    return changeFruit(result.data);
}

export {
    fetchFruits,
    fetchFruit
}