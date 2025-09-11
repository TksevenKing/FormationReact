// import { plantList } from "../datas/PlantList";
import '../styles/PlantItem.css'
import CareScale from "./CareScale";


function PlantItem({name, cover, id, light, water}){

    return(
        <>
        <li key={id} className='plantItem'>
            {/* <span className='lmj-sales'>{plant.light}</span> */}
            <img  className="plantPhoto" src={cover} alt={name} />
        
            {name}
            {/* Appel du composant CareScale en passant un props pour la reutilisation i.e ici j'utilise le meme code pour afficher != chose */}
            <CareScale careType='light' scaleValue={light} /> 
            <CareScale careType='water' scaleValue={water} />
        </li>
 
        </>

    );

}

export default PlantItem;