import axios from 'axios';

// export const getCategoryList = async () => {
//   try {
//     const res = await axios.get('/recipes/category-list')
//     return res.data
//   } catch (error) {
//     console.log(error.message);
//   }
// }

export const getRecipesByCategory = async (categoryName, page = 1) => {
  try {
    const res = await axios.get(
      `/recipes/category/${categoryName}?page=${page}`
    );
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
};
