const Drawer = ({ onCloseCart }) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className="d-flex justify-between mb-30">
                    Cart
                    <img
                        className="remove-button cu-p"
                        src="img/button-remove.svg"
                        alt="remove"
                        onClick={onCloseCart}
                    />
                </h2>

                <div className="items">
                    <div className="cartItem d-flex align-center mb-20">
                        <div
                            style={{ backgroundImage: 'url(img/card-picture.png)' }}
                            className="cartItemImg"
                        ></div>
                        <div className="mr-20 flex">
                            <p className="mb-5">your text</p>
                            <b>9999 UAH</b>
                        </div>
                        <img className="remove-button" src="img/button-remove.svg" alt="remove" />
                    </div>
                </div>

                <div className="cartTotalBlock">
                    <ul className="cartTotalBlock">
                        <li>
                            <span>Total:</span>
                            <div></div>
                            <b>9999 UAH</b>
                        </li>
                        <li>
                            <span>Сommission:</span>
                            <div></div>
                            <b>1000 UAH</b>
                        </li>
                    </ul>
                    <button className="greenButton">
                        Make an order
                        <img src="img/arrow.svg" alt="arrow" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;
