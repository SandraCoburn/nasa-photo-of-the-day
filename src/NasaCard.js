import React from "react";
import { MyCardTitle } from "./styles";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

const NasaCard = props => {
  return (
    <div className="nasaImage">
      <Card>
        <CardText>Date: {props.date}</CardText>
        <CardImg
          className="text center"
          width="100%"
          style={{ maxWidth: "500px" }}
          className="nasa-picture"
          alt="Nasa"
          src={props.imgUrl}
        />
        <CardBody>
          <MyCardTitle>{props.title}</MyCardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default NasaCard;
