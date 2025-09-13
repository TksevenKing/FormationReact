import '../styles/App.css';
import Banner from "./Banner";
import Footer from "./Footer";
// import QuestionForm from "./QuestionForm";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";

// cest ici qu'on placera tous nos components pour qu'il soit visible dans le naviguateur
//Le composant principal de votre application, souvent le premier que vous modifiez pour construire l'interface utilisateur. 
function App() {
  return (
    <>
        <Banner/>
        <div className="body">
          <div className="panier">
            <Cart/>
          </div>
          <div className="plantList">
            <ShoppingList/>
          </div>
            
            {/* <QuestionForm/> */}
        </div>
        <Footer/>
        

    </>
        
  );
}

export default App;
