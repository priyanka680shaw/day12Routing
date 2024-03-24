import './footer.css';
import logo3 from './resturentlogo.png'
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
function Footer(){
    return(
        <>
            <footer>
                <div className="footerContainer">
                    <div className="innerFooterContainer">
                        <div className="logocontainer">
                            <div className="logo">
                                <figure>
                                    <img src={logo3} alt='logo'></img>
                                </figure>
                            </div>
                            <div className="logoName">
                                <h1>Our Tea Adda</h1>
                            </div>
                        </div>
                        <br></br>
                        <div className="footerText">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.</p>
                        </div>
                        <br></br>
                        <div className="menuBar">
                            <ul>
                                <li><a href=''>About</a></li>
                                <li><a href=''>Careers</a></li>
                                <li><a href=''>History</a></li>
                                <li><a href=''>Services</a></li>
                                <li><a href=''>Projects</a></li>
                                <li><a href=''>Blogs</a></li>
                            </ul>
                        </div>
                        <br></br>
                        <div className="footerIcons">
                            <ul>
                                <li><a href=''><FaFacebook/></a></li>
                                <li><a href=''><FaInstagram/></a></li>
                                <li><a href=''><FaTwitter/></a></li>
                                <li><a href=''><FaGithub/></a></li>
                                <li><a href=''><TbWorld/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;