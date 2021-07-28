import classes from "./PageHeader.module.css";
import {motion} from 'framer-motion'

const PageHeader = (props) => {
    return ( 
        <div className = {classes.Container}>
            <hr/>
            <motion.h1 class="button">
            {props.title}
            </motion.h1>
        </div>
    );
}

export default PageHeader;