import { useQuery } from 'react-query';
import Filter from '../Filter';
import FruitCard from '../FruitCard';
import styles from './styles.module.css';

import { fetchFruits } from '@/api/fruit';
import { Fruit } from '@/models/interfaces/fruit';
import { fetchCategories } from '@/api/categories';
import { Category } from '@/models/interfaces/category';
import { useEffect, useState } from 'react';

function ProductList() {
    const { data, isLoading } = useQuery('fruits', fetchFruits);
    const { data: filters } = useQuery<Category[]>('categories', fetchCategories);

    const [filter, setFilter] = useState(-1);
    const [dataFiltered, setDataFiltered] = useState(data);

    useEffect(() => {
        setDataFiltered(data?.filter(item => {
            return filter === -1 || item.category._id === filter;
        }))
    }, [data, filter])

    const FruitCtn = !isLoading ?
    <div className={styles['list-ctn']}>
        { dataFiltered?.map((fruit: Fruit) => <FruitCard key={fruit._id} {...fruit} /> )}
    </div> : <h2>Loading...</h2>;

    return (
        <section id='ProductList' className={styles.ProductList}>
            <h2>Our organic Products</h2>
            <Filter onChange={setFilter} atualId={filter} filters={filters ?? []} all='All vegetables' />
            { FruitCtn }
        </section>
    );
}

export default ProductList;