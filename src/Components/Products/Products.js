import React,{useState, useEffect} from 'react';
import Product from '../Product/Product';
import Search from '../Search/Search';
import axios from 'axios';
import './Products.scss';


const Products = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        console.log('use', products)
        axios.get('/api/products').then(res => {
            setProducts(res.data)
        })
    }, [setProducts])

    const searchItem = (search) => {
        console.log('search', search)
        axios.get(`/api/search?search=${search}`).then(res => {
            setProducts(res.data)
        })
    }

    const resetSearch = () => {
        console.log('s', products)
        axios.get('/api/products').then(res => {
            setProducts(res.data)
        })
    }


    const mappedProducts = products.map(product => {
       return <Product key={product.product_id} product={product}/>
    })

    return(
        <section className='products'>
            <Search searchItem={searchItem}
            resetSearch={resetSearch}/>
            <div className='product-container'>
                {mappedProducts}
            </div>
        </section>
    )
}

export default Products;