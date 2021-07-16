import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import RecipeForm from './RecipeForm';


const Edit = ({ id, setShowEdit, getRecipes }) => {
  const history = useHistory();
  const API_URL = `https://git-noms-api.herokuapp.com/recipes`
  const [ values, setValues ] =
  useState ({
    title: '',
    ingredients: '',
    directions: '',
    cuisineType: '',
  });

  const getRecipe = async () => {
    try {
      const recipe = await fetch(`${API_URL}/${id}`);
      const data = await recipe.json();
      setValues({title: data.title, ingredients: data.ingredients, directions: data.directions, cuisineType: data.cuisineType, author: data.author});
    } catch (err) {
      console.log(err);
    }
  }

  useEffect (() => {
      getRecipe();
  }, []);

  const updateRecipe = async (e, values) => {
    e.preventDefault();
    setShowEdit(false);
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 200 ) {
        // history.push(`/`);
        getRecipes();
      } else {
                alert('Something went wrong. Please try again');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <RecipeForm
    setShowEdit={setShowEdit}
    handleSubmit={updateRecipe}
    values={values}
    setValues={setValues}
    type='Update'    />
  );

 
};





export default Edit;