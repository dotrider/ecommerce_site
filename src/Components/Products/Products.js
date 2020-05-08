import React,{useState, useEffect} from 'react';
import Product from '../Product/Product';
// import Search from '../Search/Search';
import axios from 'axios';
import './Products.scss';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('')
    const [minPrices, setMinPrices] = useState(false)
    const [avePrices, setAvePrices] = useState(false)
    const [maxPrices, setMaxPrices] = useState(false)


    useEffect(() => {
        console.log('use', products)
        axios.get('/api/products').then(res => {
            setProducts(res.data)
        })
    }, [])

    const searchItem = () => {
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

    // const resetSearch = () => {
    //     setSearch('')
    // }





    const searching = () => {
        // console.log('min',minPrices, 'ave',avePrices, 'max', maxPrices)
        if(minPrices){
            axios.get(`/api/products/minimum/${minPrices}`).then(res => {
            setProducts(res.data)
            }) 
        }else if(avePrices){
            axios.get(`/api/products/average/${avePrices}`).then(res => {
            setProducts(res.data)
            })
         }else if(maxPrices){
            axios.get(`/api/products/max/${maxPrices}`).then(res => {
            setProducts(res.data)
            })
        }
       setMinPrices(false);
       setAvePrices(false);
       setMaxPrices(false);
    }

  
    const mappedProducts = products
    .filter(product => {
        
        return product.name.toLowerCase().includes(search);
      })
    .map(product => {
       return <Product key={product.product_id} product={product}/>
    })

    return(
        <section className='products'>

        <section className='search'>
            <div className='search-container'>
                <input  name='search' value={search} onChange={e => setSearch(e.target.value)}/>



                <label>Filter by price 20 - 24</label>
                <input type='radio' value={minPrices} checked={minPrices} onChange={() => setMinPrices((!minPrices))} name='check' />
                <label>Filter by price 25 - 29</label>
                <input type='radio' value={avePrices} checked={avePrices} onChange={() => setAvePrices(!avePrices)} name='check' />
                <label>Filter by price 30 - 34</label>
                <input type='radio' value={maxPrices} onChange={() => setMaxPrices(!maxPrices)} name='check' />
                <span onClick={() => searchItem()}>Search</span>
                <span onClick={() => resetSearch()}>Reset</span>
                  <span onClick={() => searching()}>Radio</span>
            </div>
        </section>
            {/* <Search searchItem={searchItem}
            resetSearch={resetSearch}
            filter={filter}/> */}
            <div className='product-container'>
                {mappedProducts}
            </div>
        </section>
    )
}

export default Products;