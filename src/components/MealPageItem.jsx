import SolidBtn from "./Buttons";

export default function MealPageItem({ meal, deleted }) {
  return (
    <>
      {deleted === false ? (
        <div className="p-5 lg:p-10 md:p-7 bg-gray-700 rounded text-white">
          <div className="flex flex-col lg:flex-row gap-5 ">
            <div className="flex-[4] lg:border-r lg:pe-5">
              <img src={meal.img} alt={meal.title} className="rounded shadow-lg w-full h-full object-cover max-h-[450px] " />
              <ul id="tagList" className="lg:flex hidden flex-wrap gap-5 mt-5 bg-gray-900 rounded p-3">
                {Array.isArray(meal.tags) ? meal.tags.map((tag, i) => <li key={i}>{tag}</li>) : <li>{meal.tags}</li>}
              </ul>
            </div>
            <div className="lg:flex-[5] w-full ">
              <h2 className="xl:text-7xl text-4xl md:text-5xl lg:text-6xl underline lg:mb-8 mb-3">{meal.title}</h2>
              <p>{meal.description}</p>
              <div className="lg:flex justify-between bg-pink-400 w-max rounded items-center my-8 p-3">
                <div className="flex gap-5">
                  <p>
                    <span className="font-semibold">Time:</span> {meal.minsToCook} Mins
                  </p>
                  <p>
                    <span className="font-semibold">Cost:</span> ${meal.costToMake}
                  </p>
                  <p>
                    <span className="font-semibold">Serves:</span> {meal.serves}
                  </p>
                </div>
              </div>
              <ul id="tagList" className="flex flex-wrap gap-5 bg-gray-900 rounded p-3 mb-8 lg:hidden">
                {Array.isArray(meal.tags) ? meal.tags.map((tag, i) => <li key={i}>{tag}</li>) : <li>{meal.tags}</li>}
              </ul>
              <div>
                <h3 className="text-3xl underline mb-3">Ingredients:</h3>
                <ul id="ingredientsList">
                  {Array.isArray(meal.ingredients) ? meal.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>) : <li>{meal.ingredients}</li>}
                </ul>
              </div>
              {meal.hasRecipe === "Yes" ? (
                <div className="mt-10">
                  <h3 className="text-3xl underline mb-3">Recipe:</h3>
                  <ul id="recipeMethod">
                    {Array.isArray(meal.steps)
                      ? meal.steps.map((step, i) => (
                          <li key={i}>
                            <span className="text-lg font-semibold">{`${i + 1}) `}</span>
                            {step}
                          </li>
                        ))
                      : meal.steps && (
                          <li>
                            <span className="text-lg font-semibold">1) </span>
                            {meal.steps}
                          </li>
                        )}
                  </ul>
                </div>
              ) : (
                <div className="mt-10">
                  <h3 className="text-2xl text-red-400">No recipe available</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="p-5 lg:p-10 md:p-7 bg-gray-700 rounded text-white flex justify-center items-center">
          <p className="text-2xl py-3 px-5 rounded bg-red-400">Meal deleted!</p>
        </div>
      )}
    </>
  );
}
