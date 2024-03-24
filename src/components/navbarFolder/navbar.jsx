// import '../component.css';
import './navbar.css';
//import logo from'../footerFolder/resturentlogo.png';
import logo from './logo.svg';
import Button from '../bottonFolder/button';
import { NavLink } from 'react-router-dom';
function Navbar(){
    return(
        <>
           <nav>
                <div className='mainnavContainer'>
                    <div className='innernavContainer'>
                        <div className='logoContainer'>
                            <figure>
                                <img  src= {logo} alt='logo'></img>
                            </figure>
                            <p className='logoName'>TeaAdda</p> 
                            {/* <h2 className='logoName' style={{"color" : "blue"}}>GeekFoods</h2>  */}
                        </div> 
                        <div className='menulist'>
                            <ul>
                                <li ><NavLink to='/Home' style={{"color" : "blue"}}>Home</NavLink></li>
                                <li> <NavLink to='/Quote'>Quote</NavLink></li>
                                <li> <NavLink to='/Resturent'>Resturent</NavLink></li>
                                <li> <NavLink to='/Foods'>Foods</NavLink></li>
                                <li> <NavLink to='/contacts'>Contcts</NavLink></li>
                            </ul>
                        </div>
                        <div className='button'>
                           <Button borderRadius= {8} bgColor = "blue">Get started</Button>
                        </div>
                    </div>
                </div>
           </nav>
        </>
    );
}

export default Navbar;