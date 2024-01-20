import { FaTwitter } from "react-icons/fa";
import { FaTumblr } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { PiQuotesFill } from "react-icons/pi";
export default function QuoteBox(){
    return(
        <div className="quote-box">
            <section className="quote-text">
                <h2><PiQuotesFill /> The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.</h2>
            </section>
            <section className="quote-author">
                <h3>-Helen Keller</h3>
            </section>
            <section className="quote-footer">
                    <div className="share-quote">
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaTumblr /></a>
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTelegramPlane /></a>
                    </div>
                    <button>New Quote</button>
            </section>
            
        </div>
    )
}