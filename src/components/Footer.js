import { useState } from "react"
import '../styles/Footer.css'


function Footer() {
    const [inputValue, setInputValue] = useState("Entrez votre mail")

    function cheickValue(){
        if (!inputValue.includes('@')) {
            alert("Attention il n'y pas '@' ceci n'est pas une addresse mail valide")
        }
    }
    return (
        <footer className="footer">
            <div>Pour les passionnee de plantes 🌿🌱🌵</div>
            <div>Laissez-nous votre mail :</div>
            <input type="text" placeholder="Entrez votre email" 
                onChange={ (e) => setInputValue(e.target.value)}
                onBlur={cheickValue}>
            </input>
            
            
        </footer>
    )
}

export default Footer