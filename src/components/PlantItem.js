// import { plantList } from "../datas/PlantList";
import '../styles/PlantItem.css'
import CareScale from "./CareScale";


function PlantItem({name, cover, id, light, water}){

    return(
        
        <li key={id} className='plantItem'>
            {/* <span className='lmj-sales'>{plant.light}</span> */}
            <img  className="plantPhoto" src={cover} alt={{name} + `cover`}/>
        
            {name}
            {/* Appel du composant CareScale en passant un props pour la reutilisation i.e ici j'utilise le meme code pour afficher != chose */}
            <div >
                <CareScale careType='light' scaleValue={light} /> 
                <CareScale careType='water' scaleValue={water} />
            </div>

        </li>
 
        

    );

}
// function handleClick(plantName) {
//     // console.log(plantName)
//     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }

export default PlantItem;