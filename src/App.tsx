import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HorizontalSlideShow } from './components/HorizontalSlideShow';
import image1 from "./assets/images/image1.jpg";
import image2 from "./assets/images/image2.jpg";
import image3 from "./assets/images/image3.jpg";
import image4 from "./assets/images/image4.jpg";
import image5 from "./assets/images/image5.jpg";

function App() {
  const dataSlider = [
    {
      image: image1,
      info: [
        "this is information image 1",
        "this is information image 1",
        "this is information image 1"
      ]
    },
    {
      image: image2,
      info: [
        "this is information image 2",
        "this is information image 2",
        "this is information image 2"
      ]
    },
    {
      image: image3,
      info: [
        "this is information image 3",
        "this is information image 3",
        "this is information image 3"
      ]
    },
    {
      image: image4,
      info: [
        "this is information image 4",
        "this is information image 4",
        "this is information image 4"
      ]
    },
    {
      image: image5,
      info: [
        "this is information image 5",
        "this is information image 5",
        "this is information image 5"
      ]
    },
    {
      image: image2,
      info: [
        "this is information image 6",
        "this is information image 6",
        "this is information image 6"
      ]
    },
  ]

  return (
    <div className="App">
      <HorizontalSlideShow data={dataSlider} />
    </div>
  );
}

export default App;
