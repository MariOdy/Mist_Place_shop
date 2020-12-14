import React from 'react'

import Footer from './components/Footer';
import Header from './components/Header';



import Home from './pages/Home';
import Delivery from './pages/Delivery';
import Contacts from './pages/Contacts';
import Payment from './pages/Payment';
import Cart from './pages/Cart'

import { Route } from 'react-router-dom';


const App = () => {
const [products, setProducts] = React.useState([]);


    React.useEffect(() => {
        fetch('http://localhost:3000/allProducts.json')
        .then((resp)  => resp.json())
        .then(json => {
            setProducts(json.products);
            });
            }, []);


    return(
        <div>
            <Header menuItems={['Новинки','Украшение','Гирлянды','Освещение','Подарки']}/>

            <Route path="/" render={() => <Home items={products} />} exact />
            <Route path="/cart" component={Cart} exact/>
            <Route path="/delivery" component={Delivery} exact/>
            <Route path="/contacts" component={Contacts} exact/>
            <Route path="/payment" component={Payment} exact/>

            <Footer/>
        </div>
    )
}




export default App;