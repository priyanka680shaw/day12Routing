import { FaLocationDot } from "react-icons/fa6";
import { GoStarFill } from "react-icons/go";
import { ImSpoonKnife } from "react-icons/im";
import './ResturentCard.css'
function ResturentCard({name , address , addressline2 , outcode , postcode , type_of_food , rating}){
   
    return(
        <>
           <div className='ResCardContainer'>
                <div className='ResCardInnerContainer'>
                    <div className='resturentAbout'>
                        <div className="resnameRating">
                            <h2 style={{
                                marginRight: "20px",
                                color : "black",
                                fontSize : "25px"
                            }}>{name}</h2>
                           
                           {/* {
                            for(let i=0; i< rating ; i++){
                                
                            }
                           } */}
                            <GoStarFill />
                            
                            <p style={{
                                marginLeft: "10px",
                                color : "black"
                            }}>{rating}</p>
                        </div>
                       
                        <div className='ResturentAddress'>
                            <FaLocationDot/>
                            <p style={{
                                marginLeft: "10px",
                                color : "black"
                            }}>{address} {addressline2} </p>
                        </div>
                        <div className="ResturentAdd">
                            <p>{outcode} {  postcode}</p>
                        </div>
                        
                    </div>
                    <div className='resturentMenu'>
                        <div className="resturantName">
                            <ImSpoonKnife />
                            <p style={{
                                marginLeft: "10px",
                               
                            }}>{type_of_food}</p>
                        </div>
                        <div className="visitMenu">
                            <p><a href="#">Visit Menu</a></p>
                        </div>
                        

                    </div>
                </div>
           </div>
        </>
    );
}
export default  ResturentCard;