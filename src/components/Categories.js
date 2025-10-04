// import { useState } from "react";
import { plantList } from "../datas/PlantList";
import '../styles/ShoppingList.css'

function Categories({currentCat, updateCurrentCat}){

    // Je dois constitue une nouvelle liste contenant les categorie unique des plantes // copie sans doublons
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category), []
    )
    

    return (
        <> 
            <div className="SelectCategorie">
                <button  onClick={() => updateCurrentCat("")}>Réinitialiser</button>
                <select name="categories" id="categories" 
                        onChange={ e => updateCurrentCat(e.target.value)} >
                    <option value="" >------</option>
                    {categories.map((categorie) =>
                        <option value={categorie} key={categorie} > {categorie}</option>
                        )}
                </select>
            </div>

        </>
    )
}

export default Categories;