import React from 'react'
import '../components/css/Main.css'


function ProductBlock({ name, imageUrl, price, brand }) {
    return (
            <div className='block-card-item'>
                    <img src={imageUrl}></img>
                    <span>{brand}</span>
                    <div>{name}</div>
                <section className='bottom-card'>
                    {price}
                    <span className='currency'>UAH</span>
                    <button className='buy-button'>Купить</button>
                </section>
            </div>
    )
}

export default ProductBlock;
