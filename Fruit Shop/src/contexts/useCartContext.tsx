import { ReactNode, createContext, useEffect, useState } from "react";

interface CartProducts {
    _id: number
    quantity: number
}

interface CartContext {
    products: CartProducts[]
    add: (_id: number) => void
    sub: (_id: number) => void
    remove: (_id: number) => void
}

export const cartContext = createContext<CartContext>({
    products: [],
    add: (_id: number) => {},
    sub: (_id: number) => {},
    remove: (_id: number) => {}
})


export default function CartContextProvider({children}: {children: ReactNode}) {
    const [products, setProducts] = useState<CartProducts[]>([]);

    useEffect(() => {
        retrieve();
    }, [])

    useEffect(() => {
        save(products);
    }, [products])

    async function add(_id: number) {
        const produto = products.find(item => item._id === _id);
        if(!produto) {
            setProducts([...products, {_id: _id, quantity: 1}]);
        } else setProducts(products.map(item => {
            if(item._id === _id) 
                return {...item, quantity: item.quantity + 1}
            return item;
        }));
    }

    async function sub(_id: number) {
        const produto = products.find(item => item._id === _id);
        if(!produto) {
            throw new Error('Cart not syncronized')
        } else setProducts(products.map(item => {
            if(item._id === _id) 
                return {...item, quantity: item.quantity - 1}
            return item;
        }));
    }

    async function remove(_id: number) {
        const produtos = products.filter(item => item._id !== _id);
        setProducts(produtos);
    }

    async function save(products: CartProducts[]) {
        await localStorage.setItem('cart', JSON.stringify(products));
    }

    async function retrieve() {
        const value = await localStorage.getItem('cart');
        if(value) setProducts(JSON.parse(value));
    }

    return (
        <cartContext.Provider value={{ products, add, sub, remove }}>
            { children }
        </cartContext.Provider>
    )
}