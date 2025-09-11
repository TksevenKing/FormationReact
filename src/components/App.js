// import './App.css';
import Banner from "./Banner";
// import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import PlantItem from "./PlantItem";

// cest ici qu'on placera tous nos components pour qu'il soit visible dans le naviguateur
//Le composant principal de votre application, souvent le premier que vous modifiez pour construire l'interface utilisateur. 
function App() {
  return (
    <>
        <Banner/>
        {/* <Cart/> */}
        <ShoppingList/>
        <PlantItem />

    </>
        
  );
}

export default App;
