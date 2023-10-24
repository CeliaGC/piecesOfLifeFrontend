import Alert from 'react-bootstrap/Alert';
import { useLoaderData, useParams } from 'react-router-dom';
import ImageHandler from '../handler/ImageHandler';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const EditForm = () => {
  const { image } = useLoaderData();
  console.log(image);
  const [updatedImage, setUpdatedImage] = useState(image[0]);

  const handleFieldChange = (event) => {
    const { name, value } = event.target;
    setUpdatedImage({
      ...updatedImage,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedData = { ...image, ...updatedImage };
    const { id } = image[0];
    ImageHandler.updateImage(id, updatedData);
  };

  const [showAlert, setShowAlert] = useState(false);

           const handleAddClick = () => {
               setShowAlert(true);
           }
           const handleAlertClose = () => {
               setShowAlert(false);
           }


    return (
      <>

{image.map(i => (

  <Form style={{borderRadius:"0.625rem", border:"2px solid #d63384", height:"80%", width:"80%", marginTop:"10%", marginLeft:"10%", backgroundColor:"rgba(153, 153, 153, 0.7)"}} onSubmit={handleSubmit}>
  <h2 style={{backgroundColor:"rgba(153, 153, 153, 1)", borderRadius:"0.625rem", border:"2px solid #d63384"}}>Editing {i.imageName} </h2>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label htmlFor="id"></Form.Label>
        <Form.Control type="hidden" defaultValue={updatedImage.id}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="imageName">Title</Form.Label>
        <Form.Control style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} onChange={handleFieldChange} name="imageName" defaultValue={updatedImage.imageName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="category">Category</Form.Label>
                    <select style={{borderRadius:"0.0625rem", backgroundColor:"rgba(255, 233, 246, 1)"}} onChange={handleFieldChange} name="category" defaultValue={updatedImage.category}>
                      <option value="nature">Nature</option>
                      <option value="society">Society</option>
                      <option value="science">Science</option>
                    </select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label htmlFor="imageSource">Image Source</Form.Label>
        <Form.Control style={{backgroundColor:"rgba(255, 233, 246, 1)", width:"80%",marginLeft:"10%"}} name="imageSource" value={updatedImage.imageSource} />
      </Form.Group>

      <Button style={{borderRadius:"0.625rem", border:"2px solid #d63384"}} variant="secondary" type="submit" onClick={handleAddClick}>
        Submit
      </Button>

      <Link to="/gallery" >
      <Button variant='secondary' bg='dark' type="button" value="Back to Gallery" style={{borderRadius:"0.625rem", border:"2px solid #d63384"}}>
        Back to Gallery
      </Button>
      </Link>

                <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
                <Alert.Heading>Image updated</Alert.Heading>
                 <p>
                   Enjoy your gallery
                 </p>
                 <hr />
                 <div className="d-flex justify-content-end">
                   <Button onClick={handleAlertClose} variant="outline-success">
                     Close
                   </Button>
                 </div>
                 </Alert>
            </Form>

          ))}    
      </>
    );
  };

  export default EditForm;

