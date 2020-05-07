import React,{ useState } from 'react';
import './Search.scss';

const Search = (props) => {
        const [search, setSearch] = useState('')


    return(
        <section className='search'>
            <div className='search-container'>
                <input  name='search' value={search} onChange={e => setSearch(e.target.value)}/>
                <span onClick={() => props.searchItem(search)}>Search</span>
                <span onClick={() => props.resetSearch()}>Reset</span>
            </div>
        </section>
    )
}

export default Search;