import React from 'react'
import '../components/css/allPages.css'
import card from '../components/img/card-1.jpg'
import cash from '../components/img/cash-1.jpg'

const Payment = () => {
    return (
        <div>
            <div className='main-block-contain'>
                <div className='main-head'>Оплата</div>
                <div className="main-block-text">
                    Интернет-магазин Christmas Mist заботится о каждом из Вас,
                    предлагая различные способы оплаты при заказе и в момент его получения.
                    Благодаря этому Вы можете быть уверены в безопасности онлайн-шопинга.
                    <br/>
                    Выбирайте удобный способ оплаты и экономьте свое время!
                </div>
            </div>
            <section className='container-main-information'>
                <div className='information-card'>
                    <div className='information-card-item'><img src={cash}/></div>
                    <div className='information-card-item'>
                        Оплата товара на отделении почты при получении.
                        При этом, взымается комиссия согласно тарифам службы доставки!
                    </div>
                </div>
                <div className='information-card'>
                    <div className='information-card-item'><img src={card} alt="" /></div>
                    <div className='information-card-item'>
                        Оплата товара, в момент оформления заказа, проводится на реквизиты,
                        которые предоставит менеджер после подтверждения заказа!
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Payment;

