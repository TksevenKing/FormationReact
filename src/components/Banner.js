import '../styles/Banner.css'
import logo from'../assets/leafLogo.png' 

function Banner() {
    const titre = "La maison jungle"
    return (
        <div className="lmj-title">
            <img src={logo} alt='logo' className='lmj-logo'/>
            <h1>{titre.toUpperCase()}</h1>
        </div>
        
    )
}

export default Banner;