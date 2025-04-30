import RecipeDetailsItem from "@/components/recipe-details";

const fetchRecipeDetails = async (currentRecipeId) => {
  try {
    const apiRes = await fetch(
      `https://dummyjson.com/recipes/${currentRecipeId}`
    );
    const data = await apiRes.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const RecipeDetails = async ({ params }) => {
  const getRecipeDetails = await fetchRecipeDetails(params?.details);

  return (
    <div>
      <RecipeDetailsItem getRecipeDetails={getRecipeDetails} />
    </div>
  );
};

export default RecipeDetails;
