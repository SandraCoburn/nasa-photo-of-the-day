import React, { useState, useEffect} from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

export default function NasaList(){
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=KjXOIgq6DaekwB4mBBkxMdzKNEAAX9cVGj3VnUs4")
            .then(response => {
                console.log("this", response.data);
                setPictures(response.data);
            })
            .catch(error => {
                console.log('the data was not return', error);
            });
    }, []);
       
    return (
        <div>
           <NasaCard imgUrl={pictures.url} explanation={pictures.explanation} date={pictures.date} title={pictures.title}/>
            
        </div>
    );
}

  {/* {pictures.map((picture, index) => {
                return <NasaCard key={index}  imgUrl={picture.url} explanation={picture.explanation} date={picture.date}/>
            })}; */}