import { useState } from 'react'
import '../styles/Cart.css'

function Cart() {
  const montserraPrice = 8
  const [cart, updateCart] = useState(0) //valeur initial de cart = 0
  const [isOpen, setIsOpen] = useState(false)

  if(isOpen){
    return (
        <div className='lmj-cart'>
          <button onClick={() => setIsOpen(false)}>Fermer le panier</button>
          <h2>Panier</h2>
          <div>
            Montserra : {montserraPrice}$
            <button onClick={() => updateCart(cart +1)}>Ajouter</button>
          </div>
          <h3>Total : {montserraPrice * cart}$</h3> 
          <button onClick={() => updateCart(0)}>Vider le Panier</button>
        </div>
    )
  }else{
    return(
      <div className='lmj-cart'>
      <button onClick={() => setIsOpen(true)}>Ouvrir le panier</button>
      </div>

    )
  }

}

export default Cart  //Export Default pour permettre l'importation dans d'autres fichiers sans utiliser les {} accolades 