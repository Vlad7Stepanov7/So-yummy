const getCategoryList = async (token) => {

  const recipeOptimization = recipe => {
    return { id: recipe._id, title: recipe.title, preview: recipe.preview, category: recipe.category }
  }

  const categoryOptimization = category => category.map(recipe => recipeOptimization(recipe))

  const list = await fetch('https://team-project-so-yummy-backend.onrender.com/api/recipes/main-page', {
    method: 'GET',
    headers: {
      "Authorization": `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })

  const responseReceived = await list.json();
  const result = responseReceived.result.map(category => categoryOptimization(category));
  return result;
}


export default getCategoryList;