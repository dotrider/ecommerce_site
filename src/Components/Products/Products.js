import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './Products.scss';


const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('/api/products').then(res => {
            setProducts(res.data)
        })
    }, [])


    const mappedProducts = products.map(product => {
       return  <div key={product.product_id} className='product-info'> 
           <img id='product-img' src={product.product_img}/>
           <p>
           	{product.name}
           </p>
           <p>
               {product.price}
           </p>
       
       </div>
    })

    return(
        <section className='products'>
            PRODUCTS
            <div className='product-container'>
                {mappedProducts}
            </div>
        </section>
    )
}

export default Products;