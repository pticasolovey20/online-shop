import styles from './Favorites.module.scss';
import Card from '../../components/Card';

const Favorites = ({ items, addToFavorite, addToCart }) => {
    return (
        <div className={styles.content}>
            <h1>MY FAVORITES</h1>
            <div className={styles.cardWrapper}>
                {items &&
                    items.map(item => (
                        <Card
                            item={item}
                            key={item.id}
                            favorited={true}
                            onFavorite={addToFavorite}
                            onPlus={addToCart}
                        />
                    ))}
            </div>
        </div>
    );
};

export { Favorites };
