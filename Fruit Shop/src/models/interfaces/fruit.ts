import { Category } from "./category"

export interface Fruit {
    _id: number
    name: string
    description: string
    price: number
    category: Category
    image_url: string
}