import PageHeader from '../PageHeader/PageHeader'
import classes from './Projects.module.css'
import projectOne from './../../img/rotary.jpg'
import projectTwo from './../../img/job.jpeg'
import projectThree from './../../img/job.jpeg'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'



const  projectCodeOne   =   <ul><li>React - Bootstrap</li></ul>
const  projectCodeTwo   =   <ul><li></li></ul>
const  projectCodeThree =   <ul><li></li></ul>

const projectTitleOne = 'Rotary Website'
const projectTitleTwo = 'Select Dropdown'
const projectTitleThree = 'Bug Tracker'

const projectOneDescription = 'Dawnbreakers is a Rotary group that networks and organises events to raise money for local and international causes. I created functioning website that will help them network with the global community.';
const projectTwoDescription = 'A custom select dropdown component is one of the most common requirements in web development. Select dropdown allows the user to choose one value from a predefined list.';
const projectThreeDescription  = 'A bug tracking system is software that keeps track of bugs that the user encountered in any software development or in any project. ';


const playBtnSvg =(url) => {
    return (
        
        <div className={classes.PlayButton} 
         onClick={(e) => window.open(url,"_blank").focus}
        >

            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60" 
            whileHover={{scale:1.3}}>
	        <path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		    c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		    C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"
            fill="rgb(0, 255, 213)">
            </path>
            </motion.svg>
        
        </div>
    )
};

const projectLink = (thumbnail, title, url,  description, code) => {
        return (
           <div className={classes.ProjectContainer}>
            
                <div className={classes.Thumbnail}>
                    <img src={thumbnail} alt='thumbnail'/>   
                </div>    
            
                <div className={classes.Text}>
                <div className={classes.LinkName}>
                    <h2>{title}</h2> 
                    {playBtnSvg(url)}    
                </div>
                    <p>{description}</p> 
                    <h3>{code}</h3>     
                </div>  

            </div>                      
        )
};      
        



const Projects = () => {

const {ref, inView} = useInView ({
    threshold: 0.2
});
const animation = useAnimation();

useEffect(() => {
    console.log("use effect hook, inView = ", inView);
    if(inView) {
        animation.start({
            x: 0, 
            transition: {
                type: 'spring', duration: 1, bounce: 0.3
            }
        });
    };

    if(!inView){
        animation.start({x: '-100vw'})
    }
    
}, [inView]);

    return (
            <div className = {classes.Project} id="project">
                
                <PageHeader title={"My Projects"} />
                <div ref={ref} className={classes.ProjectContent}>

                        <motion.div className={classes.Projects} animate={animation}> 
                            {projectLink(projectOne, projectTitleOne,  '', projectOneDescription, projectCodeOne)}
                            {projectLink(projectTwo, projectTitleTwo, '', projectTwoDescription, projectCodeTwo)}
                            {projectLink(projectThree, projectTitleThree, '', projectThreeDescription, projectCodeThree)}
                        </motion.div>
                </div> 
            </div>    
         );       
     };       
     
export default Projects;