import './style.scss';

const CartItem = ({ item, onRemove }) => {
    return (
        <div className="cartItem d-flex align-center mb-20">
            <div style={{ backgroundImage: `url(${item.imgUrl})` }} className="cartItemImg"></div>
            <div className="mr-20 flex">
                <p className="mb-5">{item.name}</p>
                <b>{item.price} UAH</b>
            </div>
            <img
                onClick={() => onRemove(item.id)}
                className="remove-button"
                src="img/button-remove.svg"
                alt="remove"
            />
        </div>
    );
};

export default CartItem;
