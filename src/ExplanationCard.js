import React from "react";
import { MyCardTitle } from "./styles";
import { Card, CardBody } from "reactstrap";

const ExplanationCard = props => {
  return (
    <div>
      <Card>
        {/* <CardTitle color="purple" className="text center" width="100%" style={{ maxWidth: "400px"}}> */}

        <MyCardTitle>Explanation:</MyCardTitle>
        {/* <CardText  className="text center" width="100%" style={{ maxWidth: "400px"}}> */}
        <CardBody>
          <MyCardTitle>{props.explanation}</MyCardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

export default ExplanationCard;
