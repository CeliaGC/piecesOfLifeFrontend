

import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ImageHandler from '../Handler/ImageHandler';

export default function DetailView() {
  const { id } = useParams();
  const [image, setImage] = useState([]);

  useEffect(() => {
    async function fetchImage() {
      const imageData = await ImageHandler.loadImage(id);
      setImage(imageData);
    }
    fetchImage();
  }, [id]);

  const deleteImage = async (id) => {
    setImage(image.filter((i) => i.id !== id));
    await ImageHandler.deleteImage(id);
  };


  let imageLarge = image;

  return (
    <>
      {imageLarge.map((i) => (
        <div
          className="modal show"
          style={{ display: 'block', position: 'initial', backgroundColor: "rgba(135, 135, 135, 0.5)" }}
        >
          <Modal.Dialog size='lg'>
            <Modal.Header style={{ backgroundColor: "rgba(135, 135, 135)" }}>
              <Modal.Title style={{ backgroundColor: "rgba(135, 135, 135)", color: "white" }}>{i.imageName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={i.imageSource} style={{ height: "100%", width: "100%" }} />
            </Modal.Body>

            <Modal.Body>
              <p>{i.category}</p>
            </Modal.Body>

            <Modal.Footer style={{ backgroundColor: "rgba(135, 135, 135)" }}>
              <Link to={`/editImage/${i.id}`}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Edit</Button></Link>
              <Link to={"/gallery"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }}>Gallery</Button></Link>
              <Link to={"/gallery"}><Button variant="secondary" style={{ backgroundColor: "#d63384" }} onClick={() => deleteImage(i.id)}>Delete</Button></Link>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      ))}
    </>
  );
}