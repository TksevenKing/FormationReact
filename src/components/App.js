import '../styles/App.css';
import Banner from "./Banner";
import Footer from "./Footer";
// import QuestionForm from "./QuestionForm";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import { useState } from 'react'

// cest ici qu'on placera tous nos components pour qu'il soit visible dans le naviguateur
//Le composant principal de votre application, souvent le premier que vous modifiez pour construire l'interface utilisateur. 
function App() {
    // faire remonter le state dans le composant parent
    const [cart, updateCart] = useState([]) // On initialise cart (le panier) comme un tableau d'objet vide qui contiendra chaque
                                        //chaque plante avec ses proprietes (type, qte, etc) quand on cliquera sur ajouter
  return (
    <>
        <Banner/>
        <div className="body">
          <div className="panier">
            {/* l'etat est passe au enfants a travers les props */}
            <Cart cart={cart} updateCart={updateCart} />
          </div>
          <div className="plantList">
            <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
            
            {/* <QuestionForm/> */}
        </div>
        <Footer/>
        

    </>
        
  );
}

export default App;
