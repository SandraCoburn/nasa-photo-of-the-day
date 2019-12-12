import React, { useState }from "react";
import "./nasa.css";


export default function NasaButtons(props) {
    const setDate = props.setDate;
    const [text, setText] = useState('');
    return (
        <div>
            Input date (YYYY-MM-DD): 
            <input type="text" value={text} onInput={event => setText(event.target.value)}/>
           
            <button onClick={() => setDate(text)}>Show Picture</button>
        </div>
    );
}