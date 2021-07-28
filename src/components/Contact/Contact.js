import classes from './Contact.module.css'
import {motion} from 'framer-motion'
import {FaGithub, FaLinkedin } from "react-icons/fa";

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return (
        <div className={classes.Contact} id="contact">
            
            <div className={classes.ContactIcons} >
                <motion.div whileHover={{scale: 1.3}}>
                <FaGithub color='white' size ='40px' style={{padding: '1%' }}
                onClick={handleURL('https://github.com/Jebeiuk')} />
                </motion.div>
                <motion.div whileHover={{scale: 1.3}}>
                <FaLinkedin color='white' size ='40px' style={{padding: '1%' }}
                onClick={handleURL('https://www.linkedin.com/in/simon-garavan-299a33172/')} />
                </motion.div> 
            </div>

        </div>
    );
}






            

 
export default Contact;