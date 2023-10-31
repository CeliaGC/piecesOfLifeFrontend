import { useForm } from 'react-hook-form';
import React, { useState, useEffect } from 'react';
import {ImageHandler} from '../Handler/ImageHandler';
import { CategoriesHandler } from '../Handler/CategoriesHandler';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';






function UpLoadForm() {

    const { register, handleSubmit, formState: { errors }, setValue, getValues, reset } = useForm();
    const [imageUrl, setImageUrl] = useState('');
    const [categories, setCategories] = useState([]);
    const [addCategory, setAddCategory] = useState(false);
    const [newCategory, setNewCategory] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
  

  useEffect(() => {getData();}, []);

  const getData = async () => {
    const data = await CategoriesHandler.loadCategories();
    // if (data.length > 0) {
    //   setSelectedCategory(data[0].categoryName);
    // }
    setCategories(data);
   
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    handleAddCategoryOption(e); // Función ya existente para manejar la opción de "Add Category"
  };



  const onSubmit = (data) => {
   
    if (!data.imageName || !data.category|| !data.imageSource){
      Swal.fire('Must fill every field')
    }else{

    ImageHandler.addImage(data)
    .then(response => {
      if (response.status === 201) {
          Swal.fire('Success', 'Image added successfully!', 'success');
          reset();
          setImageUrl('');
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

  const handleAddCategoryOption = (e) => {
    if (e.target.value === "Add Category") {
      setAddCategory(true);
    } else {
      setAddCategory(false);
    }
  };

  const handleSaveCategory = () => {
    if (!newCategory){
      Swal.fire('Every category must have a name')
    }else{
    CategoriesHandler.addCategory({ categoryName: newCategory })
      .then(response => {
        if (response.status === 201) {
          Swal.fire('Success', 'Category added successfully!', 'success');
          reset()
      } else {
          // Puedes mostrar un mensaje más genérico o usar response.data para mostrar un mensaje específico
          Swal.fire('Error', 'Failed to add category.', 'error');
      }
        // Actualizar la lista de categorías
        getData();
        // Reseteamos los estados
        setAddCategory(false);
        setNewCategory('');
      })
      .catch(error => {
        Swal.fire('Error', 'An error occurred while adding the category.', 'error');
      });}
  };



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
        <select
          value={selectedCategory}
          style={{ borderRadius: "0.0625rem", backgroundColor: "rgba(255, 233, 246, 1)" }}
          {...register("category")}
          name="category"
          onChange={handleCategoryChange}
        >
           <option value=""></option>
          {
            categories.map(c => (
              <option key={c.id} value={c.categoryName}>{c.categoryName}</option>
            ))
          }
          <option>Add Category</option>
        </select>
        {addCategory && (
          <>
          <Form.Control style={{backgroundColor:"rgba(255, 233, 246, 1)",marginLeft:"10%", width:"80%"}}
            type="text"
            placeholder="New Category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <Button onClick={handleSaveCategory} style={{borderRadius:"0.625rem"}} variant="secondary">Add Category</Button>
          </>
        )}
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
    
      
