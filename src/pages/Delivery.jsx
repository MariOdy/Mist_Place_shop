import React from 'react'
import '../components/css/allPages.css'

const Delivery = () => {
    return (
        <div>
            <div className='main-block-contain'>
                <div className='main-head'>Доставка</div>
                <div className="main-block-text">
                    Интернет-магазин Christmas Mist осуществляет доставку по всей территории Украины!
                    <br/>
                    Отправки осуществляются каждый день, кроме субботы и воскресенья. 
                    <br/>
                    При оформлении заказа до 12:00 отправка день в день.
                    <br/>
                    <span>*Если при оформлении заказа Вы не знаете, какой способ доставки выбрать или ни один 
                    из них Вас не устраивает, свяжитесь с нашим оператором, и он поможет решить проблему.</span>
                </div>
            </div>
            <section className='container-main-information'>
                <div className='information-card'>
                    <div className='information-card-item'><img src="https://i0.wp.com/itc.ua/wp-content/uploads/2020/10/novaposhta-1.png" alt=""/></div>
                    <div className='information-card-item info-item-text'>
                            Доставка по Украине до отделения "Новая почта" в течение 1-3 дней. 
                            При сумме заказа до 500 грн - доставка всего 39 грн,
                            свыше 1500 грн - бесплатно.
                    </div>
                </div>
                <div className='information-card'>
                    <div className='information-card-item'><img src="https://trc-cosmopolite.com/wp-content/uploads/2019/10/180.jpg" alt=""/></div>
                    <div className='information-card-item info-item-text'>
                            Доставка в более 500 пунктов выдачи заказов Justin в течение 2-3 дней. 
                            При сумме заказа до 500 грн - доставка всего 29 грн,
                            свыше 1500 грн - бесплатно.
                    </div>
        
                </div>
                <div className='information-card'>
                    <div className='information-card-item'><img src="https://zemelshik.com.ua/images/ukrpochta.png" alt=""/></div>
                    <div className='information-card-item info-item-text'>
                            Доставка по Украине до отделения "Укрпочта" в течение 1-3 дней. 
                            При сумме заказа до 500 грн - доставка всего 29 грн, 
                            свыше 1500 грн - бесплатно.
                    </div>
                </div>
            </section>
            
        </div>
    )
}

export default Delivery;

