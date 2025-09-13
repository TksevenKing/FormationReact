function CareScale({careType, scaleValue}){
    
    let scaleType;
    if(careType === 'light'){
        scaleType = "☀️"
    }else{
        scaleType = "💧"
    }
     const range = [1,2,3]
   
     // Fonction de suffestion d'arrosage ou de lumiere
    function careSuggestion() {
        if(careType === 'light'){
            switch (scaleValue) {
                case 1:
                    alert("Cette plante requiert peu de lumiere ☀️")
                    break;
                case 2:
                    alert("Cette plante requiert moderement de lumiere ☀️☀️")
                    break;
                case 3:
                    alert("Cette plante requiert beaucoup de lumiere ☀️☀️☀️")
                    break;
            
                default:
                    break;
            }
        }else{
            switch (scaleValue) {
                case 1:
                    alert("Cette plante requiert peu d'arrosage 💧")
                    break;
                case 2:
                    alert("Cette plante requiert moderement d'arrosage💧💧")
                    break;
                case 3:
                    alert("Cette plante requiert beaucoup d'arrosage💧💧💧")
                    break;
            
                default:
                    break;
            }
        }
    }
   

    return(
        <div onClick={() => careSuggestion()}>{range.map((rangeElem) => 
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
        </div>
        
        
    )
}

 



export default CareScale;