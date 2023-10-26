import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ImageHandler from '../handler/ImageHandler';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';





function UpLoadForm() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const [imageUrl, setImageUrl] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleAddClick = () => {
    setShowAlert(true);
  }

  const handleAlertClose = () => {
    setShowAlert(false);
  }

  const onSubmit = (data) => {
    ImageHandler.addImage(data)
console.log(data)
}



  const handleUploadClick = () => {
    const widget = window.cloudinary.createUploadWidget({
        cloudName: 'dvx5np4ma',
        uploadPreset: 'm2bwuxr6'
    }, (error, result) => {
        if (result.event === "success") {
            const url = result.info.secure_url;
            console.log(url);
            setImageUrl(url);
            setValue('imageSource', url);
        }
    });

    widget.open();
  }


   return(
    <>
    <Form style={{borderRadius:"0.625rem", border:"2px solid #d63384", height:"80%", width:"80%", marginTop:"10%", marginLeft:"10%", backgroundColor:"rgba(153, 153, 153, 0.7)"}} onSubmit={handleSubmit(onSubmit)}>
    <h2 style={{backgroundColor:"rgba(153, 153, 153, 1)", borderRadius:"0.625rem", border:"2px solid #d63384"}}>New Image</h2>
        <Form.Group className="mb-3" controlId="id">
          <Form.Label htmlFor="id"></Form.Label>
          <Form.Control type="hidden"/>
        </Form.Group>
        <p>Make sure you fill up every field</p>
        <Form.Group className="mb-3" controlId="imageName">
          <Form.Label htmlFor="imageName">Title</Form.Label>
          <Form.Control name='imageName' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} {...register("imageName", { required: true })} />
       {errors.imageName && <span>Debe rellenar este campo</span>}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="category">
          <Form.Label htmlFor="category">Collection</Form.Label>
                      <select style={{borderRadius:"0.0625rem", backgroundColor:"rgba(255, 233, 246, 1)"}}{...register("category", { required: true })} name="category" >
                        <option value="nature">Nature</option>
                        <option value="society">Society</option>
                        <option value="science">Science</option>
                      </select>
                      {errors.category && <span>Debe rellenar este campo</span>}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="imageSource">
          <Form.Label htmlFor="imageSource"></Form.Label>
          <Button style={{borderRadius:"0.625rem"}} variant="secondary" onClick={()=> handleUploadClick()}>Select image</Button>
          <Form.Control style={{border: 0, backgroundColor:"transparent", width:"80%",marginLeft:"10%"}} {...register("imageSource", { required: true })}type='text' readOnly name="imageSource" value={imageUrl}/>
          
          {errors.imageSource && <span>Debe rellenar este campo</span>}
        </Form.Group>
  
        <Button style={{borderRadius:"0.625rem", border:"2px solid #d63384"}} variant="secondary" type="submit" onClick={handleAddClick}>
          Submit
        </Button>
  
        <Link to="/gallery" >
        <Button variant='secondary' bg='dark' id="back" type="button" value="Back to Gallery" style={{borderRadius:"0.625rem", border:"2px solid #d63384"}}>
          Back to Gallery
        </Button>
        </Link>
  
        <Alert show={showAlert} variant="success" onClose={handleAlertClose} dismissible>
                  <Alert.Heading>Image added to you collections</Alert.Heading>
                   <p>
                     Enjoy your gallery!
                   </p>
                   <hr />
                   <div className="d-flex justify-content-end">
                     <Button onClick={handleAlertClose} variant="outline-success">
                       Close
                     </Button>
                   </div>
                   </Alert>
              </Form> 
             

        </> 
  
    
   )
}










export default UpLoadForm
    
      