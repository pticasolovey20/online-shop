import './App.scss';

import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [cartOpened, setCartOpened] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const [favorites, setFavorites] = useState([]);

    const [data, updateData] = useState(null);
    const requestUrl = 'https://63891094d94a7e5040ad939a.mockapi.io/';

    useEffect(() => {
        const fetchData = async () => {
            const responseCardItems = await axios.get(requestUrl + 'goods');
            updateData(responseCardItems.data);

            const responseCartItems = await axios.get(requestUrl + 'cart');
            setCartItems(responseCartItems.data);
        };
        fetchData();
    }, []);

    const addToCart = item => {
        setCartItems(prev => [...prev, item]);
        axios.post(requestUrl + 'cart', item);
        setCartOpened(true);
    };

    const removeFromCart = id => {
        axios.delete(requestUrl + 'cart/' + id);
        setCartItems(prev => prev.filter(item => item.id !== id));
    };

    const addToFavorite = item => {
        axios.post(requestUrl + 'favorites', item);
        setFavorites(prev => [...prev, item]);
    };

    const changeInputValue = event => {
        setInputValue(event.target.value);
    };

    return (
        <div className="wrapper clear">
            {cartOpened && (
                <Drawer
                    onCloseCart={() => setCartOpened(false)}
                    items={cartItems}
                    requestUrl={requestUrl}
                    onRemove={removeFromCart}
                    cartItems={cartItems}
                />
            )}

            <Header onCart={() => setCartOpened(true)} />
            <section className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>{inputValue ? `SEARCH BY "${inputValue}"` : 'ALL SNEAKERS'}</h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt="Search" />
                        <input
                            placeholder="Search..."
                            onChange={changeInputValue}
                            value={inputValue}
                        />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {data &&
                        data
                            .filter(item =>
                                item.name.toLowerCase().includes(inputValue.toLowerCase())
                            )
                            .map(item => (
                                <Card
                                    name={item.name}
                                    price={item.price}
                                    imgUrl={item.imgUrl}
                                    key={item.id}
                                    onFavorite={() => addToFavorite(item)}
                                    onPlus={() => addToCart(item)}
                                />
                            ))}
                </div>
            </section>
        </div>
    );
}

export default App;
