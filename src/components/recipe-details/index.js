import Link from "next/link";
const RecipeDetailsItem = ({ getRecipeDetails }) => {
  return (
    <div className="relative">
      <Link
        href={"/recipe-list"}
        className="absolute left-[30%] text-xl font-bold bg-gray-400 px-3 py-2 mt-3 rounded-full hover:scale-[1.1] transition-all"
      >
        Go to Recipe list
      </Link>
      <div className="p-6 lg:max-w-6xl max-w-2xl mx-auto ">
        <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
          <div className="w-full lg:sticky top-0 sm:flex gap-2 ">
            <img
              src={getRecipeDetails?.image}
              alt={getRecipeDetails?.name}
              className="w-4/5 rounded object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl text-gray-900 font-bold">
              {getRecipeDetails?.name}
            </h2>

            <div className="flex flex-wrap gap-4 mt-5">
              <p className="text-2xl text-gray-700">
                {getRecipeDetails?.mealType[0]}
              </p>
            </div>
            <div className="mt-2">
              <p className="text-xl text-gray-800">
                {getRecipeDetails?.cuisine}
              </p>
            </div>
            <div className="mt-4">
              <h2 className="text-lg text-gray-700 font-bold">Ingredients</h2>
              <ul className="space-y-3 list-disc mt-4 pl-4 text-sm text-gray-700">
                {getRecipeDetails?.ingredients?.map((item) => (
                  <li key={item.id}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsItem;
