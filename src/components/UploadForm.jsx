import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import ImageHandler from '../handler/ImageHandler';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';




function UpLoadForm() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const [imageUrl, setImageUrl] = useState('');


  // const handleImageChange = (event) => {
  //   const picture = event.target.input;
  //   const reader = new FileReader();
  //   reader.readAsDataURL(picture);
  //   reader.onload = () => {
  //     setValue("imageSource", reader.result);
  //   };
  // }

  const [showAlert, setShowAlert] = useState(false);

  const handleAddClick = () => {
    setShowAlert(true);
  }

  const handleAlertClose = () => {
    setShowAlert(false);
  }

  const onSubmit = (data) => {
    ImageHandler.addImage(data)

}

  // const cloudinaryRef = useRef();
  // const widgetRef = useRef();
  // useEffect(() => {
  //   cloudinaryRef.current = window.cloudinary;
  //   widgetRef.current = cloudinaryRef.current.createUploadWidget({
  //     cloudName:'dvx5np4ma',
  //     uploadPreset:'m2bwuxr6'
  //   }, function (error, result){
  //     const url = result.info.secure_url
  //     console.log(url)
  //     setImageUrl(url)
  //   });
  
  // }, [])

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

    widget.open();  // Abrir el widget
};



   return(
    <>
    <Form style={{borderRadius:"0.625rem", border:"2px solid #d63384", height:"80%", width:"80%", marginTop:"10%", marginLeft:"10%", backgroundColor:"rgba(153, 153, 153, 0.7)"}} onSubmit={handleSubmit(onSubmit)}>
    <h2 style={{backgroundColor:"rgba(153, 153, 153, 1)", borderRadius:"0.625rem", border:"2px solid #d63384"}}>New Image</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label htmlFor="id"></Form.Label>
          <Form.Control type="hidden"/>
        </Form.Group>
        <p>Make sure you fill up every field</p>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="imageName">Title</Form.Label>
          <Form.Control name='imageName' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} {...register("imageName", { required: true })} />
       {errors.terms && <span>Debe rellenar este campo</span>}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="category">Category</Form.Label>
                      <select style={{borderRadius:"0.0625rem", backgroundColor:"rgba(255, 233, 246, 1)"}}{...register("category", { required: true })} name="category" >
                        <option value="nature">Nature</option>
                        <option value="society">Society</option>
                        <option value="science">Science</option>
                      </select>
                      {errors.terms && <span>Debe rellenar este campo</span>}
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label htmlFor="ImageSource">Image Source</Form.Label>
          <Button style={{borderRadius:"0.625rem"}} variant="secondary" onClick={()=> handleUploadClick()}>Select image</Button>
          <Form.Control style={{backgroundColor:"rgba(255, 233, 246, 1)", width:"80%",marginLeft:"10%"}} {...register("ImageSource", { required: true })}type='text' readOnly name="ImageSource" value={imageUrl}/>
          
          {errors.terms && <span>Debe rellenar este campo</span>}
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
    
      