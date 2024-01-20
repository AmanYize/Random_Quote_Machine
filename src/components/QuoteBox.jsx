import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
import React, {useState, useEffect} from "react";
import { TumblrShareButton } from "react-share";


export default function QuoteBox(){
    const [randomQuote, setRandomQuote] = useState(0);
    const [quotesData, setQuotesData] = useState([]);
    
    useEffect(()=>{
        const fetchData = async()=>{
            const result = await fetch("https://type.fit/api/quotes")
            .then(function(response) {
              return response.json();
            })
            .then(function(data) {
              setQuotesData(data)
            });

        }
        fetchData();
    },[])
    function getRandomQuote(){
        setRandomQuote(Math.floor(Math.random()*quotesData.length))
    }
    const text = quotesData.length != 0 ? quotesData[randomQuote].text : '';
    const author =  quotesData.length != 0 ? quotesData && quotesData[randomQuote].author.split(",")[0] : '';
    return(
        <div className="quote-box">
            <section className="quote-text">
                <h2><PiQuotesFill /> {quotesData && text}</h2>
            </section>
            <section className="quote-author">
                <h3>- {quotesData && author}</h3>
            </section>
            <section className="quote-footer">
                    <div className="share-quote">
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(text + " - " + author)}`}
  id="tweet-quote"
  target="_top"
  rel="noopener noreferrer"><FaTwitter /></a>
                       
                        
                        <a id="telegram-quote"
  title="Share this quote on Telegram!"
  target="_blank"
  href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(text + " - " + author)}`}
  rel="noopener noreferrer"><FaTelegramPlane /></a>
                    </div>
                    <button onClick={()=>{
                        getRandomQuote()
                    }}>New Quote</button>
            </section>
            
        </div>
    )
}