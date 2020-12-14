import React from 'react'
import '../components/css/cart.css'


const Cart = () => {
    return (
        <div className='cart-container'>
            <div className='cart-label'>Корзина</div>
            <div className='cart-added'>
                <div className='cart-selection-left-first'>
                    <div className='cart-item'>
                       <div className='img-cart-item'><img src="https://cdn.shopify.com/s/files/1/0157/7750/products/natural-mistletoe-wreath-02_1024x1024.jpg?v=1602788139" alt=""/></div>
                        <div className='cart-item-label'>
                            Традиционнный венок из омелы
                            <span>HOUSE DOCTOR</span>
                        </div>
                    </div>
                    <div className=' cart-item'>
                        <div className='img-cart-item'><img src="https://cdn.shopify.com/s/files/1/0157/7750/products/snow-200_white_wood_snowflake_bunting-min_1024x1024.jpg?v=1601578586" alt=""/></div>
                        <div className='cart-item-label'>
                            Деревянная гирлянда со снежинками
                            <span>GINGER RAY</span>
                        </div>
                    </div>
                </div>
                <div className='cart-selection-right-first'>
                    <div className='cart-item ct-it-right'>
                        <div className='amount-cart-item '>
                            <button >+</button>
                            <span>1</span>
                            <button >-</button>
                        </div>
                        <div className='price-cart-item'>
                            <div>600</div>
                            <div className='checkout-currency'>UAH</div>
                        </div>
                    </div>
                    <div className='cart-item ct-it-right'>
                        <div className='amount-cart-item '>
                            <button>+</button>
                            <span>1</span>
                            <button >-</button>
                        </div>
                        <div className='price-cart-item'>
                            <div>550</div>
                            <div className='checkout-currency'>UAH</div>
                        </div>
                    </div>
                </div>
            </div>
            {/*форма для заполнения*/}
            <form className='buy-form'>
                <div className='cart-selection-left form-items'>
                    <input type='text' placeholder='ФИО'></input>
                    <input type='tel'  placeholder='Номер телефона' required></input>
                    <input type='email' placeholder='Email'></input>
                </div>
                <div className='cart-selection-right form-items'>
                    <input type='text' placeholder='Город доставки' required></input>
                    <input type='text' placeholder='Отделение Новой Почты' required></input>
                    <div className='total'>
                        <div className='total-amount'>1150UAH</div>
                        <button type='submit'>Оформить заказ</button>
                    </div>
                    
                </div>
            </form>
        </div>
    )}

export default Cart;
