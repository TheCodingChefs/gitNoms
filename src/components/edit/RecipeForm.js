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
    <form onSubmit={(e) => handleSubmit(e, values)} className="recipe-form">
      <div className='edit-title'>
        <label htmlFor='title'>Title</label><br></br>
        <input type='text' id='title' value={values.title} onChange={handleChange} placeholder='Title' required />
      </div>

      <div className='edit-ingredients'>
        <label htmlFor='ingredients'>Ingredients</label><br></br>
        <textarea id='ingredients' value={values.ingredients} onChange={handleChange} placeholder='Ingredients' required rows="5" cols="50" />
      </div>

      <div className='edit-directions'>
        <label htmlFor='directions'>Directions</label><br></br>
        <textarea id='directions' value={values.directions} onChange={handleChange} placeholder='Directions' required rows="5" cols="50" />
      </div>

      <div className='edit-cuisineType'>
        <label htmlFor='cuisineType'>Cuisine</label><br></br>
        <input type='text' id='cuisineType' value={values.cuisineType} onChange={handleChange} placeholder='Cuisine Type' required />
      </div>

      <div className='edit-author'>
        <label htmlFor='author'>Author</label><br></br>
        <input type='text' id='author' value={values.author} onChange={handleChange} placeholder='Author' required />
      </div>


      <input type='submit' value={`${type} recipe`} className='submit' />
    </form>
  )
}


export default RecipeForm;
