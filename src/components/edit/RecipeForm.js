const RecipeForm = ({handleSubmit, values, setValues, type }) => {
  const handleChange = (e) => {
    setValues((prevState) => {
      return {
        ...prevState,
        [e.target.id]: e.target.value,
      };
    })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, values)}>
      <div className='edit-title'>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={values.title} onChange={handleChange} placeholder='Title' required />
      </div>

      <div className='edit-ingredients'>
        <label htmlFor='ingredients'>Ingredients</label>
        <input type='text' id='ingredients' value={values.ingredients} onChange={handleChange} placeholder='Ingredients' required />
      </div>

      <div className='edit-directions'>
        <label htmlFor='directions'>Directions</label>
        <input type='text' id='directions' value={values.directions} onChange={handleChange} placeholder='Directions' required />
      </div>

      <div className='edit-cuisineType'>
        <label htmlFor='cuisineType'>Cuisine</label>
        <input type='text' id='cuisineType' value={values.cuisineType} onChange={handleChange} placeholder='Cuisine Type' required />
      </div>

      <div className='edit-author'>
        <label htmlFor='author'>Author</label>
        <input type='text' id='author' value={values.author} onChange={handleChange} placeholder='Author' required />
      </div>


      <input type='submit' value={`${type} recipe`} className='submit' />
    </form>
  )
}


export default RecipeForm;
