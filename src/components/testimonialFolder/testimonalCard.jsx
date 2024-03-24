import './testimonialCard.css';
import img from './bb.avif'
function TestimonialCard(props){
    return(
        <section>
            <div className='cardConatainer'>
                <div className='cardInnerContainer'>
                    <div className='aboutCardDescription'>
                        <p>{props.children}</p>
                    </div>
                    <div className='dp'>
                        <figure>
                            <img src={img}></img>
                        </figure>
                        <div className='holderName'>
                            <h4>{props.empName}</h4>
                            <p>{props.empPosition}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default TestimonialCard;