import React from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
  } from 'reactstrap';


const ExplanationCard = (props) => {


    return(
        <div>
            <Card>
            <CardTitle color="purple" className="text center" width="100%" style={{ maxWidth: "400px"}}>Explanation:</CardTitle>
            <CardText  className="text center" width="100%" style={{ maxWidth: "400px"}}>{props.explanation}</CardText>
            </Card>
        </div>
    )
}

export default ExplanationCard;