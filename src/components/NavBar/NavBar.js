import classes from './NavBar.module.css'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'

const NavBar = () => {
    return ( 
        <div className = {classes.NavBar}>
            <Navigation/>
            <MobileNavigation/>
        </div>
     );
}
 
/*
https://www.facebook.com/DawnbreakersRotaryClub/

*/



export default NavBar;