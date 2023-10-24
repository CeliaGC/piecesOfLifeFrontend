import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Row, Col, Card } from 'react-bootstrap';
import { width } from '@mui/system';
import ImageHandler from '../Handler/ImageHandler';

const MyCarousel = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await ImageHandler.loadImages();
    setImages(data);
  };


  let slideImages = images;

  return (
    <>
      <Carousel>
        {slideImages.map((i) => (
          <Carousel.Item style={{ height: "350px", marginTop: "5%" }}>
            <Card.ImgOverlay style={{ margin: "-0.625", height: "5%" }}>
              <Card.Title><h1>Create collections, enjoy the beauty of our world</h1></Card.Title>
              <Card.Title><h1>Share what makes you chill</h1></Card.Title>
              <Card.Title><h1>Treasure little pieces of life </h1></Card.Title>
            </Card.ImgOverlay>
            <img style={{ opacity: "0.5" }} className="d-block w-100" src={i.imageSource} />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default MyCarousel;
