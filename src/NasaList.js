import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";
import ExplanationCard from "./ExplanationCard";
import NasaButtons from "./NasaButtons";
import { Col, Row } from "reactstrap";

export default function NasaList() {
  const [pictures, setPictures] = useState([]);
  let newDate = new Date();
  function formatDate(date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  const [date, setDate] = useState(formatDate(newDate));
  console.log(formatDate(newDate));

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=KjXOIgq6DaekwB4mBBkxMdzKNEAAX9cVGj3VnUs4&date=${date}`
      )
      .then(response => {
        console.log("this", response.data);
        setPictures(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, [date]);

  return (
    <div>
      <NasaButtons setDate={setDate} />
      <Row>
        <Col xs="6">
          <NasaCard
            imgUrl={pictures.url}
            date={pictures.date}
            title={pictures.title}
          />
        </Col>
        <Col xs="6">
          <ExplanationCard explanation={pictures.explanation} />
        </Col>
      </Row>
    </div>
  );
}
