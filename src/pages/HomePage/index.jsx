import styles from './Home.module.scss';
import Card from '../../components/Card';

const Home = ({ inputValue, changeInputValue, items, addToFavorite, addToCart }) => {
    return (
        <section className={styles.content}>
            <div className={styles.searchWrapper}>
                <h1>{inputValue ? `SEARCH BY "${inputValue}"` : 'ALL SNEAKERS'}</h1>
                <div className={styles.searchBlock}>
                    <img src="img/search.svg" alt="Search" />
                    <input placeholder="Search..." onChange={changeInputValue} value={inputValue} />
                </div>
            </div>

            <div className={styles.cardWrapper}>
                {items &&
                    items
                        .filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase()))
                        .map(item => (
                            <Card
                                key={item.id}
                                onFavorite={addToFavorite}
                                onPlus={addToCart}
                                item={item}
                            />
                        ))}
            </div>
        </section>
    );
};

export { Home };
