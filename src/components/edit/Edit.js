import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeForm from './RecipeForm';


const EditForm = ({match, getRecipeData}) => {
  const history = useHistory();
  const API_ENDPOINT = `http://localhost:4000/recipes/${match.params.id}`
  const [ values, setValues ] =
  useState ({
    title: '',
    ingredients: [],
    directions: '',
    cuisineType: '',
  });

  const getRecipe = async () => {
    try {
      const recipe = await fetch(API_ENDPOINT);
      const data = await recipes.json();
      setValues({title: data.title, ingredients: data.ingredients, directions: data.directions, cuisineType: data.cuisineType});
    } catch (err) {
      console.log(err);
    }
  }

  useEffect (() => {
      getRecipe();
  }, []);

  const updateRecipe = async (e, values) => {
    e.preventDefault();
    try {
      const response = await fetch(API_ENDPOINT, {
        method: 'PUT',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 2000 ) {
        history.push(`/${match.params.id}`);
      } else {
                alert('Something went wrong. Please try again');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RecipeForm
    handleSubmit={updateRecipe}
    values={values}
    setValues={setValues}
    type='Update'    />
  );

 
};





export default EditForm;