import '../styles/ShoppingList.css'
import '../styles/PlantItem.css'
import { plantList } from '../datas/PlantList';
import PlantItem from './PlantItem';


// const plantList1 = [
//     'montserra',
//     'ficus lyrrata',
//     'pothos argente',
//     'yucca',
//     'palmier'
// ]

// Je dois constitue une nouvelle liste contenant les categorie unique des plantes // copie sans doublons
const categories = plantList.reduce(
    (acc, plant) =>
        acc.includes(plant.category) ? acc : acc.concat(plant.category), []
)

function ShoppingList() {
    
    return (
        <div>
            <ul>
                {categories.map((categorie) => <li key={categorie}>{categorie}</li>)}
            </ul>

            {/* Voici la bonne pratique pour afficher une liste d'article en REACT pour que le style soit au RDV */}
            <ul className='plantItemList'>
                    {plantList.map((plant) => (
                        
                        <PlantItem key={plant.id} name={plant.name} cover={plant.cover} id={plant.id} light={plant.light} water={plant.water}/>
                        
                        
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