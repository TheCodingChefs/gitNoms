import { useState } from "react"

import { useHistory } from "react-router"


export default function Add() {
    const initialFormState = {
        title: '',
        cuisineType: '',
        ingredients: '',
        directions: '',
        author: ''
    }

    const history = useHistory();

    const [values, setValues] = useState(initialFormState)

    function handleChange(event) {
        setValues({ ...values, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/recipes', {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                history.push('/');
                setValues(initialFormState)
                //GET RECPIES?//
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="add-form">
            <div className="addContainer">
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" value={values.title} onChange={handleChange}/>
            </div>
            <div className="addContainer">
                <label htmlFor="cuisineType">Cuisine Type</label>
                <input type="text" required id="cuisineType" value={values.cuisineType} onChange={handleChange}/>
            </div>
            <div className="addContainer">
                <p>Format Ingredients and Directions with an Asterisk between each item/step.</p>  
            </div>
            <div className="addContainer">
                <label htmlFor="ingredients">Ingredients</label>
                <textarea id='ingredients' value={values.ingredients} onChange={handleChange} placeholder='Ingredients' required rows="5" cols="50" />
                <p>Example: Ingredient One*Ingredient Two*Ingredient Three*etc...</p>
            </div>
            <div className="addContainer">
                <label htmlFor="directions">Directions</label>
                <textarea id='directions' value={values.directions} onChange={handleChange} placeholder='Directions' required rows="5" cols="50" />
                <p>Example: Direction number one*Direction number two*Direction number three*etc...</p>
            </div>
            <div className="addContainer">
                <label htmlFor="author">Author</label>
                <input type="text" id="author" value={values.author} onChange={handleChange}/>
            </div>
            <div className="submit">
            <input type='submit' value='Add Recipe' />
            </div>
        </form>
    )
}