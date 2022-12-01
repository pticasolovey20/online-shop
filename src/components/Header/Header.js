const Header = ({ onCart }) => {
    return (
        <header className="d-flex justify-between align-center p-40">
            <div className="d-flex align-center">
                <img width={40} height={40} src="img/logo.png" alt="logo" />
                <div>
                    <h3 className="text-uppercase"> Online Shop</h3>
                    <p className="opacity-5">your text</p>
                </div>
            </div>
            <ul className="d-flex">
                <li className="mr-30">
                    <img
                        className="cu-p"
                        width={18}
                        height={18}
                        src="img/cart.svg"
                        alt="cart"
                        onClick={onCart}
                    />
                    <span>1205 UAH</span>
                </li>
                <li>
                    <img width={20} height={20} src="img/user.svg" alt="user" />
                </li>
            </ul>
        </header>
    );
};

export default Header;
