import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import {ImageHandler} from '../Handler/ImageHandler';
import { CategoriesHandler } from '../Handler/CategoriesHandler';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';






function UpLoadForm() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues } = useForm();
    const [imageUrl, setImageUrl] = useState('');
    const [categories, setCategories] = useState([]);

  useEffect(() => {getData();}, []);

  const getData = async () => {
    const data = await CategoriesHandler.loadCategories();
    setCategories(data);
   
  };
 console.log (categories)


  const onSubmit = (data) => {
   
    if (!data.imageName || !data.category|| !data.imageSource){
      Swal.fire('Must fill every field')
    }else{

    ImageHandler.addImage(data)
    .then(response => {
      if (response.status === 200) {
          Swal.fire('Success', 'Image added successfully!', 'success');
      } else {
          // Puedes mostrar un mensaje más genérico o usar response.data para mostrar un mensaje específico
          Swal.fire('Error', 'Failed to add image.', 'error');
      }
  })
  .catch(error => {
      Swal.fire('Error', 'An error occurred while adding the image.', 'error');
  });}
  
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
          <Form.Control name='imageName' style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}} {...register("imageName",)} maxLength={40} />
       
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="category">
          <Form.Label htmlFor="category">Collection</Form.Label>
                      <select style={{borderRadius:"0.0625rem", backgroundColor:"rgba(255, 233, 246, 1)"}}{...register("category", )} name="category" >
                        <option value="nature">Nature</option>
                        <option value="society">Society</option>
                        <option value="science">Science</option>
                      </select>
                      
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="imageSource">
          <Form.Label htmlFor="imageSource"></Form.Label>
          <Button style={{borderRadius:"0.625rem"}} variant="secondary" onClick={()=> handleUploadClick()}>Select image</Button>
          <Form.Control style={{border: 0, backgroundColor:"transparent", width:"80%",marginLeft:"10%"}} {...register("imageSource", )}type='text' readOnly name="imageSource" value={imageUrl}/>
          
          
        </Form.Group>
  
        <Button style={{borderRadius:"0.625rem", border:"2px solid #d63384"}} variant="secondary" type="submit">
          Submit
        </Button>
  
        <Link to="/gallery" >
        <Button variant='secondary' bg='dark' id="back" type="button" value="Back to Gallery" style={{borderRadius:"0.625rem", border:"2px solid #d63384"}}>
          Back to Gallery
        </Button>
        </Link>
              </Form> 
             

        </> 
  
    
   )
}










export default UpLoadForm
    
      