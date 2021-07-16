import { useState } from "react"
import { isElement } from "react-dom/cjs/react-dom-test-utils.production.min";

import { useHistory } from "react-router"


export default function Add() {

    const API_URL = 'https://git-noms-api.herokuapp.com/recipes';

    const initialFormState = {
        title: '',
        cuisineType: '',
        ingredients: '',
        directions: '',
        author: '',
        allergens: {
            milk: false,
            egg: false,
            fish: false,
            shellfish: false,
            treenuts: false,
            wheat: false,
            peanuts: false,
            soybeans: false
        }
    }

    const history = useHistory();

    const [values, setValues] = useState(initialFormState)

    function handleChange(event) {
        setValues({ ...values, [event.target.id]: event.target.value })
    }

    // function handleCheck(event) {
    //     let isChecked = event.target.checked;
    //     let item = event.target.value
    //     item.setValue(prevState => ({ item, isChecked }))
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_URL}`, {
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
            {/* <div className="checkboxes">
                <input
                    type="checkbox"
                    id="milk"
                    name="milk"
                    value="false"
                    checked="false"
                    onChange={handleCheck}
                    /> Milk
            </div> */}
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