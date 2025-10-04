import '../styles/ShoppingList.css'
import '../styles/PlantItem.css'
import { plantList } from '../datas/PlantList';
import PlantItem from './PlantItem';
import Categories from './Categories';
import { useState } from 'react';





// Je dois constitue une nouvelle liste contenant les categorie unique des plantes // copie sans doublons
const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category), []
)

function ShoppingList({cart, updateCart}) {

    const [currentCat, updateCurrentCat] = useState("")
    // Ajout de la fonction addTCart()
    function addToCart(name, price) {
        // Verifier si l'elt est deja dans le panier et le garder
        let plantToAdd = cart.find(plant => plant.name === name)
    
    if(plantToAdd){
        // On cree un nouveau tableau sans elle 
        const cartFiltered = cart.filter((plant) => plant.name !== name)
        // Mettre a jour le panier avec la nouvelle liste contenant sa nouvelle qte
        updateCart([...cartFiltered, {name, price, amount: plantToAdd.amount + 1}])
    }else{
        //sinon on ajoute un nouvelle elt avec sa qte=1
        updateCart([...cart, {name, price, amount:1}])
    }

    }
    // Filter the plant list based on the selected category
    const NewPlantList = currentCat.trim() === "" ? plantList : plantList.filter((plant) => plant.category === currentCat);
    
    // const NewPlantList = plantList.filter((plant) => plant.category === currentcat)
    return (
        <div>
            {/* Ajout de categorie avec l'affichage en fonction des categories */}
            
            <Categories currentCat={currentCat} updateCurrentCat={updateCurrentCat} />
            <ul>
                {categories.map((categorie) => <li key={categorie}>{categorie}</li>)}
            </ul>

            {/* Voici la bonne pratique pour afficher une liste d'article en REACT pour que le style soit au RDV */}
            <ul className='plantItemList'>
                    {NewPlantList.map((plant) => (
                        <div key={plant.id}> {/* je met plantItem et button dans un div pour eviter de le mettre dans plantItem et button separement l'erreur de la unique Key puisqu'une liste doit retourner des elts unique */}
                            <PlantItem  
                                name={plant.name}
                                cover={plant.cover} 
                                id={plant.id} 
                                light={plant.light} 
                                water={plant.water}
                            />
                            <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                        </div>

                        
                        
                    ))}
            </ul>
            {// Toujours utiliser une liste <ul><li></ul> pour retourner une liste de produit ou d'article sinon le style ne sera pas au rdv NB: faire comme indiquer ci-dessus
            // plantList.map((plant) =>
            //     <div className='plantItemList'>
            //         <div className='plantItem'>
            //             <div className='plantPhoto'>
            //                 {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span> /* A cause du && le span ne s'affichera que si la condition est true*/   } 
            //                 {/* <span className='lmj-sales'>{plant.light}</span> */}
            //                 <img src={plant.cover} alt={plant.name} />
            //             </div>
            //             <div className='plantName'>
            //                 {plant.name}
            //             </div>
            //         </div>
            //     </div>
            // pour afficher le bagde vert a mettre dans au dessus du component plantItem :
            //   {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span> /* A cause du && le span ne s'affichera que si la condition est true*/ }  
            // 
            // )
            }


        </div>

    )
}


export default ShoppingList;