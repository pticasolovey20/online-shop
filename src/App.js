import './App.scss';

import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Drawer from './components/Drawer';
import { Home } from './pages/HomePage';
import { Favorites } from './pages/FavoritesPage';

import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [data, updateData] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [cartOpened, setCartOpened] = useState(false);

    const requestUrl = 'https://63891094d94a7e5040ad939a.mockapi.io/';

    useEffect(() => {
        const fetchData = async () => {
            const responseCardItems = await axios.get(requestUrl + 'goods');
            updateData(responseCardItems.data);

            const responseCartItems = await axios.get(requestUrl + 'cart');
            setCartItems(responseCartItems.data);

            const responseFavoritesItems = await axios.get(requestUrl + 'favorites');
            setFavorites(responseFavoritesItems.data);
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

    const addToFavorite = async item => {
        if (favorites.find(favItem => favItem.id === item.id)) {
            axios.delete(requestUrl + 'favorites/' + item.id);
            setFavorites(prev => prev.filter(obj => obj.id !== item.id));
        } else {
            const { data } = await axios.post(requestUrl + 'favorites', item);
            setFavorites(prev => [...prev, data]);
        }
    };

    const changeInputValue = event => {
        setInputValue(event.target.value);
    };

    return (
        <div className="wrapper">
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

            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            inputValue={inputValue}
                            changeInputValue={changeInputValue}
                            items={data}
                            addToFavorite={addToFavorite}
                            addToCart={addToCart}
                        />
                    }
                />
                <Route
                    path="/favorites"
                    element={
                        <Favorites
                            items={favorites}
                            addToFavorite={addToFavorite}
                            addToCart={addToCart}
                        />
                    }
                />
            </Routes>
        </div>
    );
}

export default App;
