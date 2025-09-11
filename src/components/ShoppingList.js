import '../styles/ShoppingList.css'
import { plantList } from '../datas/PlantList';
import CareScale from './CareScale';


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
            <ul className='plantList1'>
                {plantList.map((plant) => <li key={plant.id}>{plant.name} {plant.isBestSale ? <span>🔥</span> : null}</li>)}
            </ul>
            {/* Voici la bonne pratique pour afficher une liste d'article en REACT pour que le style soit au RDV */}
            <ul className='plantItemList'>
                    {plantList.map((plant) => (
                        <li key={plant.id} className='plantItem'>
                            <div className='plantPhoto'>
                            {plant.isSpecialOffer && <span className='lmj-sales'>Soldes</span> /* A cause du && le span ne s'affichera que si la condition est true*/   } 
                            {/* <span className='lmj-sales'>{plant.light}</span> */}
                            <img src={plant.cover} alt={plant.name} />
                        </div>
                         {plant.name}
                         {/* Appel du composant CareScale en passant un props pour la reutilisation i.e ici j'utilise le meme code pour afficher != chose */}
                         <CareScale careType='light' scaleValue={plant.light} /> 
                         <CareScale careType='water' scaleValue={plant.water} /> 
                         
                        </li>
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
            // )
            }


        </div>

    )
}


export default ShoppingList;