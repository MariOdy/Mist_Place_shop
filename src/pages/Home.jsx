import React from 'react'
import ProductBlock from '../components/ProductBlock'
import '../components/css/Main.css'
import { Link } from 'react-router-dom'


function Home({ items }) {
    return (
        <div>
            {/*main ad*/}
            <div className='main-ad-container'>
                <div className='main-ad-items-left'>
                    <div className='main-ad-l'>
                        <div className='main-ad-l-top l-top-1 '>
                            <a>Гирлянды</a>
                        </div>
                        <div className='main-ad-l-top l-top-2 '>
                            <a>Освещение</a>
                        </div>
                        <div className='main-ad-l-top l-top-3 '>
                            <a>Подарки</a>
                        </div>
                    </div>
                    <div className='main-ad-l left-bottom '>
                        <a>Новинки</a>
                    </div>
                </div>
                <div className='main-ad-items-right '>
                    <Link to='/ukrasheniya'>Украшение</Link>
                </div>
            </div>

{/*about*/}
            <div className='container-about'>
                <span>Christmas Mist - </span>
                <br />
                интернет магазин подарков и украшений,
                которые заставят поверить в праздничную сказку.
                Лаконичность, простота и минимализм в сочетании
                с прекрасными деталями залог нашего комфорта!
            </div>

{/*advantages*/}
            <section className='container-advantages'>
                <div className='advantages-card'>
                    <div className='advantages-card-item'><i class="fa fa-history"></i></div>
                    <div className='advantages-card-item adv-item-text'>Помощь в подборе подарков 24/7</div>
                </div>
                <div className='advantages-card'>
                    <div className='advantages-card-item'><i class="fa fa-truck"></i></div>
                    <div className='advantages-card-item adv-item-text'>Быстрая доставка</div>
                </div>
                <div className='advantages-card'>
                    <div className='advantages-card-item'><i class="fa fa-gift"></i></div>
                    <div className='advantages-card-item adv-item-text'>Индивидуальная упаковка</div>
                </div>
            </section>

{/*main block info*/}
            <div className='main-block-container'>
                <div className='main-block-header'>Все товары</div>
                    <div className='main-block-cards'>
                        {items.map((obj) => (
                            <ProductBlock key={obj.id} {...obj} />
                        ))}
                    </div>
            </div>

        </div>
    )
}

export default Home;