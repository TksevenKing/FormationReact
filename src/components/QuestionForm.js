import { useState } from "react"



function QuestionForm() {
    //Avec formulaire controlé 
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    return(
        <>
            <textarea type="text" value={inputValue} 
                onChange={ (e) => setInputValue(e.target.value)} />
            <button onClick={() => alert(inputValue)}>Alertez moi 🛑</button>
        </>
    )
}

export default QuestionForm