import SolidBtn from "./Buttons";
import { Link } from "react-router-dom";

export default function MealItem({ meal }) {
  function truncate(text, maxLength = 300) {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }

  return (
    <div className="p-5 bg-gray-700 gap-5 rounded flex flex-col lg:flex-row text-white lg:h-70">
      <div className="w-full h-full lg:flex-[3] xl:flex-[2]">
        <img src={meal.img} alt={meal.title} className="rounded shadow-lg w-full h-full object-cover max-h-[300px]" />
      </div>
      <div className="lg:flex-[7] w-full flex flex-col justify-between">
        <h2 className="text-3xl border-b pb-3 mb-3">{meal.title}</h2>
        <p className="mb-auto border-b lg:border-none pb-3">{truncate(meal.description)}</p>
        <div className="lg:flex justify-between items-center mt-3 mb-5 border-b lg:border-none lg:pb-0 lg:mb-0 pb-3">
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
          <Link to={`/meal/${meal.title}`} state={{ meal }}>
            <SolidBtn className={"hidden lg:block"} bgcolour={"bg-violet-500"} text={"View meal"} />
          </Link>
        </div>
      </div>
      <div className="lg:flex-[1] w-full lg:border-l lg:block flex items-center justify-between gap-5 lg:ps-3">
        <ul id="tagList" className="flex flex-wrap gap-5 lg:block overflow-y-scroll max-h-full">
          {meal.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
        <div>
          <Link to={`/meal/${meal.title}`} state={{ meal }}>
            <SolidBtn className={"lg:hidden hidden md:block w-max"} bgcolour={"bg-violet-500"} text={"View meal"} />
          </Link>
        </div>
      </div>
      <div>
        <Link to={`/meal/${meal.title}`} state={{ meal }}>
          <SolidBtn className={"w-max mt-5 md:hidden"} bgcolour={"bg-violet-500"} text={"View meal"} />
        </Link>
      </div>
    </div>
  );
}
