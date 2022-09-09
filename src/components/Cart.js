import '../styles/Cart.css'

function Cart() {
    const monsteraPrix = 8;
    const lierrePrix = 10;
    const bouquetPrix = 15;

    return (
        <div className="lmj-cart">
            <h2>Panier</h2>
            <ul>
                <li>Monstera : {monsteraPrix} €</li>
                <li>Lierre : {lierrePrix} €</li>
                <li>Bouquet : {bouquetPrix} €</li>
            </ul>
            <p>Total : {monsteraPrix + lierrePrix + bouquetPrix} €</p>
        </div>
    )
}

export default Cart;