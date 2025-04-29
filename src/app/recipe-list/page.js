import RecipeList from "@/components/recipe-list";

const fetchRecipe = async () => {
  try {
    const recipeRes = await fetch("https://dummyjson.com/recipes");
    if (!recipeRes.ok) {
      throw new Error(error);
    }
    const result = await recipeRes.json();
    return result?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};

const Recipes = async () => {
  const recipeList = await fetchRecipe();
  return (
    <div>
      <RecipeList recipeList={recipeList} />
    </div>
  );
};

export default Recipes;
