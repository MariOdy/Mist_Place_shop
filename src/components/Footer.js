import React from 'react'
import './css/Footer.css'

const Footer = () => {
    return (
        <div className='container-footer'>
            <div>
                <section className='container-footer-form'>
                    <div >
                        <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href='#'><i class="fa fa-pinterest" aria-hidden="true"></i></a>
                    </div>
                    <form>
                        <input type='email' name='subscribe' placeholder='email'></input>
                        <button type='submit'>Подписаться</button>
                    </form>

                </section>
               
            </div>
            <div className='container-footer-bottom'>
                <div>Copyright © 2020 Christmas Mist</div>
            </div>
        </div>
    )
}

export default Footer;