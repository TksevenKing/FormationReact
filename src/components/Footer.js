import { useState } from "react"

function cheickValue(value){
    // const inputValue = value
    return (
        <div>test</div>
    )
}
function Footer() {
    const [inputValue, setInputValue] = useState("Entrez votre mail")
    return (
        <footer className="footer">
            <div>Pour les passionnee de plantes 🌿🌱🌵</div>
            <div>Laissez-nous votre mail :</div>
            <input type="text" value={inputValue} 
                onChange={ (e) => setInputValue(e.target.value)}
                onBlur={() => cheickValue(inputValue)}>
            </input>
            
            
        </footer>
    )
}

export default Footer