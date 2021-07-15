import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 

const recipe = ({recipe}) => {

    const directions = recipe.directions.split('*');
    const ingredients = recipe.directions.split('*');

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Body>
            <Card.Title>{recipe.title}</Card.Title>
            <Card.Subtitle className='author'>By: {recipe.author}</Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">{recipe.cuisineType}</Card.Subtitle>
            <Card.Text>
                <p>Ingredients:</p>
                <ul>
                   {ingredients.map((ingredient) => {
                       return(
                           <li className="ingredient">{ingredient}</li>
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
    );
};

export default recipe;