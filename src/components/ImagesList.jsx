import { useState, useEffect } from 'react'
import ImageHandler from '../Handler/ImageHandler'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import Swal from 'sweetalert2';


function ImagesList() {
  const [images, setImages] = useState([]);
  const [searchValues, setSearchValues] = useState([]);
  const [filteredImages, setFilteredImages] = useState(images);

  useEffect(() => {getData();}, []);

  useEffect(() => {
    let filteredImages = images.filter(image => {
      let matchCheckboxValue = true;
      
      if (searchValues.length > 0) {
        matchCheckboxValue = searchValues.includes(image.category); 
      
        return  matchCheckboxValue;
      }
    });
  
    setFilteredImages(filteredImages);
  }, [images, searchValues]);

  const getData = async () => {
    const data = await ImageHandler.loadImages();
    setImages(data);
  };

  const handleCheckBox = (event) => {
    let searchInput = event.target.value;

    const isChecked = event.target.checked;

    if (isChecked) {
      setSearchValues([...searchValues, searchInput]);
    } else {
      setSearchValues(searchValues.filter(val => val !== searchInput));
    }
  }
let myImages = images;
  
  console.log(filteredImages)
  console.log(images)

  const deleteImage = (id) => {

    Swal.fire({
      title: 'Are you sure you want to delete this image?',
      text: 'This action will be permanent.',
      icon: 'info',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
          setImages(images.filter((i) => i.id !== id));
          ImageHandler.deleteImage(id);
      }
    });

         

  };

  if(searchValues.length !== 0){

   return (
    <>
    <Row  style={{paddingTop:'1.875rem', paddingBottom:"1.875rem", paddingLeft: "2.5rem"}}>
    <Dropdown>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary" bg="secondary">
          Collections
        </Dropdown.Toggle>

        <Dropdown.Menu variant='dark' style={{backgroundColor:"dimgrey"}}>
        <ToggleButtonGroup type="checkbox" variant="light" style={{justifyContent:"space-evenly"}} >
      <ToggleButton id="tbg-btn-1" variant='ligth' value={"society"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Society
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" variant='ligth' value={"science"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Science
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" variant='ligth' value={"nature"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Nature
      </ToggleButton>
    </ToggleButtonGroup>

        </Dropdown.Menu>
      </Dropdown>
    </Row>
    <Row style={{gap: 0.5, flexDirection:"revert" ,justifyContent:'space-evenly', paddingTop:'2.5rem'}} xs={2} md={3} lg={4} className="g-4"> 




        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>   
        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>
        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>
    
                    {
                      filteredImages.map(i => (
                      
                      
                        <Card key={i.id} style={{backgroundColor:"rgba(135, 135, 135, 0.7)"}} >
                        
                        <Card.Img variant="top" src={i.imageSource} style={{marginTop: "0.3125rem"}} />
                        
                        <Card.Body >
                        <Card.ImgOverlay style={{margin: "-0.625", height:"5%"}}>
                          <Card.Title style={{backgroundColor:"rgba(233,236,239,0.7", fontSize:"100%"}}>{i.imageName}</Card.Title>
                          </Card.ImgOverlay>
                          </Card.Body>
                         
                          <Card.Footer style={{display:"flex", flexDirection:"row",justifyContent:'space-evenly', alignContent:"flex-end"}}>
                          <Link to={`/editImage/${i.id}`} ><Button variant="outline-dark" size='lg'>Edit</Button></Link>
                          <Button variant="outline-dark" size='lg' onClick={()=>deleteImage(i.id)}>Delete</Button>
                          </Card.Footer>
                        </Card>
    
                      
                      
                      ))
                    }
              
                     
                  
                     </Row> 
                     </>
   )
  } else return (
    <>
    <Row  style={{paddingTop:'1.875rem', paddingBottom:"1.875rem", paddingLeft: "2.5rem"}}>
    <Dropdown>
        <Dropdown.Toggle style={{border:"2px solid #d63384"}} variant="secondary" bg="secondary">
          Collections
        </Dropdown.Toggle>

        <Dropdown.Menu variant='dark' style={{backgroundColor:"dimgrey"}}>
        <ToggleButtonGroup type="checkbox" variant="light" style={{justifyContent:"space-evenly"}} >
      <ToggleButton id="tbg-btn-1" variant='ligth' value={"society"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Society
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" variant='ligth' value={"science"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Science
      </ToggleButton>
      <ToggleButton id="tbg-btn-3" variant='ligth' value={"nature"} onChange={handleCheckBox} style={{backgroundColor:"palevioletred", width:"70%"}}>
        Nature
      </ToggleButton>
    </ToggleButtonGroup>

        </Dropdown.Menu>
      </Dropdown>
    </Row>
    <Row style={{gap: 0.5, flexDirection:"revert" ,justifyContent:'space-evenly', paddingTop:'2.5rem'}} xs={2} md={3} lg={4} className="g-4"> 




        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>   
        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>
        <Col style={{justifyContent:'space-evenly'}} xs={2} md={2} lg={3}> </Col>
    
                    {
                      myImages.map(i => (
                      
                      
                        <Card key={i.id} style={{backgroundColor:"rgba(135, 135, 135, 0.7)"}} >
                        
                        <Card.Img variant="top" src={i.imageSource} style={{marginTop: "0.3125rem", }} />
                        
                        <Card.Body >
                        <Card.ImgOverlay style={{margin: "-0.625", height:"5%"}}>
                          <Card.Title style={{backgroundColor:"rgba(233,236,239,0.7"}}>{i.imageName}</Card.Title>
                          </Card.ImgOverlay>
                          </Card.Body>
                         
                          <Card.Footer style={{display:"flex", flexDirection:"row",justifyContent:'space-evenly', alignContent:"flex-end"}}>
                          <Link to={`/detailview/${i.id}`} ><Button variant="outline-dark" size='md'>View</Button></Link>
                          <Link to={`/editImage/${i.id}`} ><Button variant="outline-dark" size='md'>Edit</Button></Link>
                          <Button variant="outline-dark" size='md' onClick={()=>deleteImage(i.id)}>Delete</Button>
                          </Card.Footer>
                        </Card>
    
                      
                      
                      ))
                    }
              
                     
                  
                     </Row> 
                     </>
  );
}


    
  
export default ImagesList