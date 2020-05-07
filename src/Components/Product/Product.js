import React from 'react';

const Container = (props) => {

    const {product_img, name, price, quantity} = props.product;
    return(
        <section>
            <div className='product-info'> 
                <img id='product-img' src={product_img}/>
                <div><p>
                {name}
                </p>
                <p>
                {price}
                </p>
                <p>
                {quantity}
                </p>
                <span>Add to cart</span>
                </div>
            
        </div>
        </section>
    )
}

export default Container;