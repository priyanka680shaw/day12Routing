import Navbar from "../navbarFolder/navbar";
import Footer from "../footerFolder/footer";
import QuoteCard from "./QuoteCard";
function QuoteScreen(){
    const quoteData = [
        {
            "description" : "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
            "author": "piku"
        },
        {
            "description" : "Music with dinner is an insult both to the cook and the violinist..",
            "author": "piku"
        },
        {
            "description" : "My favourite animal is steak.",
            "author": "piku"
        },
        {
            "description" : "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
            "author": "piku"
        },
        {
            "description" : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author": "piku"
        },
        {
            "description" : "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
            "author": "piku"
        },
        {
            "description" : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author": "piku"
        },
        {
            "description" : "What some call health if purchased by perpetual anxiety about diet, isn't much better than tedious disease.",
            "author": "piku"
        },
        {
            "description" : "It's important to begin a search on a full stomach.",
            "author": "piku"
        },
        {
            "description" : "If more of us valued food and cheer and song above hoarded gold, it would be a merrier world.",
            "author": "piku"
        },
        {
            "description" : "There is no love sincerer than the love of food.",
            "author": "piku"
        },
        {
            "description" : "It's important to begin a search on a full stomach.",
            "author": "piku"
        },
        {
            "description" : "Good food ends with good talk.",
            "author": "piku"
        },
        {
            "description" : "We don't get fat because we overeat; we overeat because we're getting fat.",
            "author": "piku"
        },
        {
            "description" : "Just as animal research tells us that gluttony and sloth are side effects of a drive to accumulate body fat, it also says that eating in moderation and being physically active (literally, having the energy to exercise) is not evidence of moral rectitude. Rather, they're the metabolic benefits of a body that's programmed to remain lean.",
            "author": "piku"
        },
        {
            "description" : "Music with dinner is an insult both to the cook and the violinist..",
            "author": "piku"
        },
        {
            "description" : "My favourite animal is steak.",
            "author": "piku"
        },
        {
            "description" : "If the divine creator has taken pains to give us delicious and exquisite things to eat, the least we can do is prepare them well and serve them with ceremony.",
            "author": "piku"
        },
        {
            "description" : "Eat breakfast like a king, lunch like a prince, and dinner like a pauper.",
            "author": "piku"
        }
    ];
    return(
        <>
            {
                quoteData.map((data , index)=>(
                    <QuoteCard description = {data.description} author = {data.author}/>
                ))
            }
            
        </>
    );
}
export default QuoteScreen;