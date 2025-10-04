import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({cart, updateCart}) {

  // cart.forEach(plant => {
  //   localStorage.setItem("plants", "test")
  // })
  // localStorage.setItem("monstera","cart")
  // console.log(localStorage.getItem("plants"))
  const [isOpen, setIsOpen] = useState(true)
  // Leur solution
 // const total1 = cart.reduce( //cart est tableau d'objet de plante avec le nom , le prix et la qte
    //(acc, plantType) => acc + plantType.amount * plantType.price,0 //ici le 0 est la valeur initial de l'acc
  //)
  //====== Ma solution ======
  let total = 0
  cart.forEach(plantType => {
      total += plantType.amount * plantType.price
  });

  useEffect(() => {
      document.title= `LMJ ${total}$ d'achats`
  }, [total])

  if(isOpen){
    
    return (
        <div className='lmj-cart'>
          <button onClick={() => setIsOpen(false)}>Fermer le panier</button>
          <h2>Panier</h2>
          <div>
            {cart.map(({name, price, amount}, index) =>(
              <div key={`${name}-${index}`}>
                  {name} {price}$ x {amount}
              </div>
            ))}
          </div>
          <h3>Total : {total}$</h3> 
          <button onClick={() => updateCart([])}>Vider le Panier</button>
          
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