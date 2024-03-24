import './about.css'
import image from './juiceimg.jpg'
import Button from '../bottonFolder/button';
function About(){
    return(
        <section>
            <div className="aboutContainer">
                <div className="aboutInnerContainer">
                    <div className="imgContainer">
                        <figure>
                            <img src= {image} alt='juice Image'></img>
                        </figure>
                    </div>
                    <div  className="aboutImg">
                        <div className='card'>
                            <h1 style={{
                                fontSize :"30px"
                            }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h1>
                            <p style={{
                                fontSize : "1rem",
                                fontWeight : "400",
                                margin : "10px",
                                color : "gray"
                                
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.
                            </p>
                            <div className='btn'>
                                <Button bgColor = "#1D4ED8" borderRadius = {5}>Get in Touch</Button>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;