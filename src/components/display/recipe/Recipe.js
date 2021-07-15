import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

 
import { useState } from 'react';

const Recipe = ({recipe}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [currentId, setCurrentId] = useState('');

    const directions = recipe.directions.split('*');
    const ingredients = recipe.ingredients.split('*');

    return (

        <>
        {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{recipe.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body><p>Ingredients:</p>
                <ul>
                   {ingredients.map((ingredient) => {
                       return(
                           <li className="ingredient">{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>
                       )
                   })} 
                </ul>
                <p>Directions:</p>
                <ol>
                    {directions.map((direction) => {
                        return(
                            <li className="direction">{direction.charAt(0).toUpperCase() + direction.slice(1)}</li>
                        )
                    })}
                </ol></Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleClose}>
                Delete
            </Button>
            <Button variant="secondary" onClick={handleClose}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>



        <Card
            onClick={handleShow}
            id={recipe._id}
            style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Subtitle className='author'>By: {recipe.author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{recipe.cuisineType}</Card.Subtitle>
            <Card.Text>
                <p>Ingredients:</p>
                <ul>
                   {ingredients.map((ingredient) => {
                       return(
                           <li className="ingredient">{ingredient.charAt(0).toUpperCase() + ingredient.slice(1)}</li>
                       )
                   })} 
                </ul>
                <p>Directions:</p>
                <ol>
                    {directions.map((direction) => {
                        return(
                            <li className="direction">{direction.charAt(0).toUpperCase() + direction.slice(1)}</li>
                        )
                    })}
                </ol>
            </Card.Text>           
        </Card.Body>
        </Card>
        </>
    );
};

export default Recipe;