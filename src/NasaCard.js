import React from "react";


const NasaCard = (props) => {


    return(
        <div>
            <h2>Nasa</h2>
            <h2>Date: {props.date}</h2>
            <img className="nasa-picture" alt="Nasa" src={props.imgUrl} />
            <h3>{props.title}</h3>
            <p>Explanation: {props.explanation}</p>

        </div>
    )
}

export default NasaCard;