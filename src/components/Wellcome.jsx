import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

Button






function Wellcome() {
  return (
    <>

    <div><h4>Wellcome to My Favourtie Images. This is a place to storage any pictures you find in the Worl Wide Web. <br />
    </h4>
    <Link to={"http://localhost:5173/uploadImage"}><Button variant="outline-dark" size='lg' bg="secondary">Start adding an image</Button></Link>
    </div>

    </>
  );
}

export default Wellcome