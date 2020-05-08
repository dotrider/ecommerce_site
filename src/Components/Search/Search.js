import React,{ useState } from 'react';
import './Search.scss';

const Search = (props) => {
        const [search, setSearch] = useState('')
        const [minPrices, setMinPrices] = useState(false)
        const [second, setSecond] = useState(false)


    

    return(
        <section className='search'>
            <div className='search-container'>
                <input  name='search' value={search} onClick={e => setSearch(e.target.value)}/>



                <label>Filter by price 20 - 24</label>
                <input type='checkbox' value={minPrices} onClick={() => props.filter(!minPrices)} name='price' ></input>
                <label>Filter by price 25 - 26</label>
                <input type='checkbox' value={second} onChange={e => setSecond(!second)} name='price' ></input>
                <span onClick={() => props.searchItem(search)}>Search</span>
                <span onClick={() => props.resetSearch()}>Reset</span>
            </div>
        </section>
    )
}

export default Search;