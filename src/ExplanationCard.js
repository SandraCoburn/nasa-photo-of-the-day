import React from "react";
import { MyCardTitle } from "./styles";
import { Card, CardBody } from "reactstrap";

const ExplanationCard = props => {
  return (
    <div>
      <Card>
        <MyCardTitle>Explanation:</MyCardTitle>

        <CardBody>
          <MyCardTitle>{props.explanation}</MyCardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExplanationCard;
