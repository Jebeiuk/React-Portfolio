import PageHeader from '../PageHeader/PageHeader'
import classes from './Skills.module.css'
import projectOne from './../../img/code.png'
import {motion} from 'framer-motion'
import {useInView} from 'react-intersection-observer'
import {useEffect} from 'react'
import {useAnimation} from 'framer-motion'


const projectOneDescription = 
<ul>
    <li className={classes.Skill} >KEY SKILLS</li>
    <li>HTML - CSS - Javascript - React </li>  
    <li  className={classes.Skill} >TOOLS </li>
    <li>NodeJS - Git - Json - Bootstrap - XML</li>
    <li  className={classes.Skill} >KNOWLEDGE</li>
    <li>PHP - SQL - C# - Python - Java - jQuery</li>
</ul>    


const projectLink = (thumbnail, description) => {
        return (
           <div className={classes.VideoContainer}>

                <div className={classes.Thumbnail}>
                    <img src={thumbnail} alt='thumbnail'/>
                </div>                 
                
                <div className={classes.Text}>
                    <p>{description}</p>
                </div> 

            </div>
        )
    };

   
const Skills = () => {

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
    }

    if(!inView){
        animation.start({x: '-100vw'})
    }
    
}, [inView]);

    return (
        <div className = {classes.Project} id="skills">
                <PageHeader title={"Coding Skills"} />

            <div ref={ref} className={classes.ProjectContent}>
                <div className={classes.Paragraph}>
                    <p>
                    I'm a lifelong learner and enjoy developing my skills.
                    Bellow are some programming languages, toolkits, frameworks and libraries that I have currently working with.
                    </p>
                </div>    
                    
                <motion.div className={classes.Videos} animate={animation}>                                        
                    {projectLink(projectOne, projectOneDescription)}
                </motion.div>      
            </div> 

        </div> 
    );       
};                    
               
export default Skills;