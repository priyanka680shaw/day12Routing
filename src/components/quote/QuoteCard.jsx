import './quote.css';

function QuoteCard(props){
    return(
        <>
            <div className='mainquoteContainer'>
                <div className='innerquoteContainer'>
                    <h2>{props.description}</h2>
                    <p>{props.author}</p>
                </div>
            </div>
            
        </>
    );
}
export default QuoteCard;