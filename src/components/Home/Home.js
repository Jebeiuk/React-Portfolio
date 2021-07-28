import classes from './Home.module.css'
import {motion} from 'framer-motion'
import SVG from './../../img/light.jpeg'



const Home = () => {
    const animateFrom = {opacity: 0, y: -40}
    const animateTo = {opacity: 1, y: 0}

    return (
            <div className={classes.Home} id="home">
                
                <div className ={classes.Container}>
                    <motion.h1 
                        className={classes.Name}
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.60}}
                        >Simon's       
                    </motion.h1>                         
                      
                    <motion.h1 
                        className={classes.WebName}
                        initial={animateFrom}
                        animate={animateTo}
                        transition={{delay: 0.70}}
                        >Portfolio
                    </motion.h1>

                    <img className={classes.HomePic} src={SVG} alt="me"></img>    

                </div>  
            </div>       
    )
};
                   
    
export default Home;
/*

*/