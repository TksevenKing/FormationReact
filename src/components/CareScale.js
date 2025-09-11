function CareScale({careType, scaleValue}){
    let scaleType;
    if(careType === 'light'){
        scaleType = "☀️"
    }else{
        scaleType = "💧"
    }
    
    
    const range = [1,2,3]

    return(
        <div>{range.map((rangeElem) => 
                    scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}</div>
        
        
    )
}
 



export default CareScale;