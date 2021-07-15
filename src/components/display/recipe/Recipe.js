import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import thumbsup from '../../../assets/thumbsup.png'
import thumbsdown from '../../../assets/thumbsdown.png'

import Edit from '../../edit/Edit';
 
import { useState } from 'react';

const Recipe = ({recipe, getRecipes}) => {


    // STATE VARIABLES
    const [show, setShow] = useState(false);
    const [showEdit, setShowEdit] = useState(false);


    // SHOW/ HIDE MODALS
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleShowEdit = () => {
        setShowEdit(true);
        setShow(false);
    }
    const handleCloseEdit = () => setShowEdit(false);


    // SPLITS THE STRINGS AT '*'
    const directions = recipe.directions.split('*');
    const ingredients = recipe.ingredients.split('*');

    // DELETE RECIPE
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete?')) {
            try {
                const deletedRecipe = await fetch(`http://localhost:4000/recipes/${recipe._id}`, {method: 'DELETE'})
                if (deletedRecipe.status === 204) {
                    getRecipes();
                    // history.push('/')
                } else {
                    alert('Oops something went wrong')
                }
            }
            catch (err) {
                console.log(err);
            }
        }
    }


    return (

        <>

        {/* RECIPE MODAL */}

        <Modal show={show} onHide={handleClose} size="lg">
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
            <Button variant="outline-danger" onClick={handleDelete}>
                Delete
            </Button>
            <Button variant="secondary" onClick={handleShowEdit}>
                Edit
            </Button>
            </Modal.Footer>
        </Modal>

        {/* EDIT MODAL */}

        <Modal show={showEdit} onHide={handleCloseEdit} size="lg">
            <Modal.Header closeButton>
            <Modal.Title>{recipe.title}</Modal.Title>
            </Modal.Header>
                    <Edit getRecipes={getRecipes} setShowEdit={setShowEdit} id={recipe._id}></Edit>
            
            <Modal.Footer>
          
            </Modal.Footer>
        </Modal>

        {/* RECIPE CARD */}

        <Card
            onClick={handleShow}
            id={recipe._id}
            style={{ width: '18rem' }}
            border="dark">
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
            <Card.Img variant="bottom" src={thumbsup} alt="thumbs up" style={{ width: '30px' }} className="rating-left"/>
            <Card.Img variant="bottom" src={thumbsdown} alt="thumbs down"  style={{ width: '30px' }} className="rating-right"/>
        </Card.Body>
        </Card>
        </>
    );
};

export default Recipe;