import { Category } from '@/models/interfaces/category';
import categories from './Mock/categories.json';
import axios from './axios';

const categoriesFetched:Category[] = Object.assign(categories)
export const categoriesMap = new Map();
categoriesFetched.forEach(({_id, name}) => {
    categoriesMap.set(_id, name);
})

async function fetchCategories() : Promise<Category[]> {
    const result = await axios.get('/category');
    return result.data;
}

export {
    fetchCategories
}