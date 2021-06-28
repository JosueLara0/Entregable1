    import React, { useState } from "react";
    import Data from "./quotes.json"

    const QuoteBox = () => {

        // Function to obtain a random number between 0 and 102 (total number of quotes in the array from quotes.json).
        const randomButton = () => {
            const limit = 102;
            return Math.floor(Math.random() * limit)
        };

        // State and change of the quote visualized and the background colors.
        let [state, setState] = useState(Math.floor(Math.random()*102));
        const [hex,setHex] = useState("blue");

        // Function that change the state of hex and state once the button is clicked
        const setStates = () => {
            const number = randomButton();
            setState(number);

            // Create a hexadecimal number
            const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            setHex(randomColor);
        };

        // Save author and quote values once the button is clicked
        const author = Data.quotes[state]["author"];
        const phrase = Data.quotes[state]["quote"];

        return (
            <div className="quoteScreen" style={{backgroundColor: `${hex}`}}>
                <div className="container">
                    <div className="quoteContainer">
                        <p className="phrase" style={{color:`${hex}`}}>" {phrase}"</p>
                        <p className="author" >- {author}</p>
                    </div>
                    <div className="buttonsContainer">
                        <button className="NewQuote" onClick={setStates}
                                style={{backgroundColor:`${hex}`}}>New Quote</button>
                        <a className="twitter-share-button"
                           style={{backgroundColor:`${hex}`}}
                           href= {`https://twitter.com/intent/tweet?text=" ${phrase}" from ${author}`}>Tweet</a>
                    </div>
                </div>
            </div>
        )
    };

    export default QuoteBox;
