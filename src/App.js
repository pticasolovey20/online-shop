import './App.scss';

import Card from './components/Card';
import Header from './components/Header/Header';
import Drawer from './components/Drawer/Drawer';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
    const [cartOpened, setCartOpened] = useState(false);

    const [data, updateData] = useState(null);
    const requestUrl = 'https://63891094d94a7e5040ad939a.mockapi.io/goods';

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requestUrl);
            updateData(response.data);
        };
        fetchData();
    }, []);

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)} />}
            <Header onCart={() => setCartOpened(true)} />
            <div className="content p-40">
                <div className="d-flex align-center justify-between mb-40">
                    <h1>Все кросовки</h1>
                    <div className="search-block d-flex">
                        <img src="img/search.svg" alt="Search" />
                        <input placeholder="Search..." />
                    </div>
                </div>

                <div className="d-flex flex-wrap">
                    {data &&
                        data.map((item, index) => (
                            <Card
                                name={item.name}
                                price={item.price}
                                imgUrl={item.imgUrl}
                                key={index}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default App;
