import { useState } from "react"


export default function Add() {
    const initialFormState = {
        title: '',
        cuisineType: '',
        ingredients: '',
        directions: ''
    }

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
                setValues(initialFormState)
                //GET RECPIES?//
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input type="text" required id="title" value={values.title} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="cuisineType">Cuisine Type</label>
                <input type="text" required id="cuisineType" value={values.cuisineType} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients</label>
                <input type="text" required id="ingredients" value={values.ingredients} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="directions">Directions</label>
                <input type="text" required id="directions" value={values.directions} onChange={handleChange}/>
                <p>Format Directions with an Asterisk between each step.</p>
                <p>Example: Direction number one*Direction number two*Direction number three*etc...</p>
            </div>
            <input type='submit' value='Add Recipe' />
        </form>
    )
}