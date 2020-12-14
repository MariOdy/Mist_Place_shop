import React from 'react'
import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = ({ menuItems }) => {
    return (
        <div>

            {/*head info*/}
            <div className='head-info-container'>
                <div className='head-info'>
                    <Link to='/delivery'><div className='head-info-left-items'>Доставка</div></Link>
                    <Link to='/payment'><div className='head-info-left-items'>Оплата</div></Link>
                    <Link to='/contacts'><div className='head-info-left-items'>Контакты</div></Link>
                </div>
                <div className='head-info'>
                    <Link to='/cart'>
                        <div className='head-info-right'>
                            <i class="fa fa-shopping-bag"></i>
                            Корзина
                        </div>
                    </Link>
                </div>
            </div>

            {/*head logo*/}
            <div className='header-logo-container'>
                <Link to='/'>
                    <div className='header-logo-main'>Christmas Mist</div>
                </Link>
            </div>

            {/*menu*/}
            
        </div>
    )
}

export default Header;