import { useState } from "react"

export default function Add() {
    const initialFormState = {
        title: '',
        cuisineType: '',
        ingredients: '',
        directions: ''
    }

    const [formState, setFormState] = useState(initialFormState)

    function handleChange(event) {
        setFormState({ ...formState, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4000/recipes', {
                method: "POST",
                body: JSON.stringify(formState),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            if (response.status === 201) {
                setFormState(initialFormState)
                getBookmarkData();
            }
        } catch (err) {
            console.log(err)
        }
    }
}