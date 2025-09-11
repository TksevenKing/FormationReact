import '../styles/Cart.css'

function Cart() {
  const montserraPrice = 8;
  const lierrePrice = 10;
  const bouquetPrice = 15;
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      <ul>
        <li>Montserra : {montserraPrice}$</li>
        <li>Lierre : {lierrePrice}$</li>
        <li>Bouquet : {bouquetPrice}$</li>
      </ul>
      Total prix : {montserraPrice + lierrePrice + bouquetPrice}$
     </div>
  )
}

export default Cart  //Export Default pour permettre l'importation dans d'autres fichiers sans utiliser les {} accolades 