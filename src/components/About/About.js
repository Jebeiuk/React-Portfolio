import classes from './About.module.css'
import PageHeader from './../PageHeader/PageHeader'
import me from './../../img/me.png'


const About = () => {
    return (
            <div className={classes.AboutMe} id="about">
                <PageHeader title={'About Me'} />
               
                <div className={classes.Container}>
                    
                    <div className={classes.Text}>
                        <h2 className={classes.Name} >Simon Garavan</h2>
                        <p>
                            As a focused and driven person with a strong academic background, I have refined valuable skills such as critical thinking and intercultural communication enhanced while teaching. Throughout this time, I continued to develop my interest and knowledge in computers and the endless possibilities of technology, especially in software development.
                        </p>
                    </div>
                    
                    <div className={classes.Photo} >
                        <img className={classes.Me} src={me} alt="me"></img>
                    </div>
                  
                </div>

            </div>
             )
    };
     
 
export default About;