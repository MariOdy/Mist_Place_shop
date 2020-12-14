import React from 'react'
import '../components/css/allPages.css'

const Contacts = () => {
    return (
        <div>
            <div className='main-block-contain'>
                <div className='main-head'>Контакты</div>
                <div className="main-block-text">
                    Наши менеджеры заботяться о том, чтобы Вы получили
                    наилучшее обслуживание в кротшайшие сроки. Но если у Вас остались вопросы,
                    то с радостью ответим на них!
                </div>
                <br/>
                <div className="main-block-contacts">
                    Время работы:
                    <br/>
                    <span className="main-block-time">
                        Пн-Пт 10:00-20:00
                    <br/>
                        Сб-Вс 10:00-16:00
                    </span>
                </div>
            </div>
            <section className="contact-info">
                <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1270.4210695839918!2d30.517733730617355!3d50.444040997555824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce56228fc9a9%3A0x6f7aa31bbc275bc6!2z0YPQuy4g0J_Rg9GI0LrQuNC90YHQutCw0Y8sIDE50JEsINCa0LjQtdCyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1606481748117!5m2!1sru!2sua"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div className="contact-info-right-block">
                    Обратная связь!
                    <form>
                        <div className="row">
                            <div className="form-group col-sm-6">
                                <input type="text" className="form-control" id="name" placeholder="Имя" required />
                            </div>
                            <div className="form-group col-sm-6">
                                <input type="email" className="form-control" id="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea id="message" className="form-control" rows="5" required></textarea>
                        </div>
                        <div className="form-group-button"><button type="submit" id="form-submit" className="btn btn-success btn-lg pull-right ">Отправить</button></div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Contacts;

