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
    <div className="p-5 bg-gray-700 lg:gap-5 rounded shadow-lg flex flex-col lg:flex-row text-white lg:h-70">
      <div className="w-full h-full flex gap-3 justify-between lg:flex-[3] xl:flex-[2] border-b sm:border-none mb-3 sm:mb-0 pb-3 sm:pb-0">
        <img
          src={meal.img}
          alt={meal.title}
          className="rounded shadow-lg min-w-[70px] max-w-[70px] sm:w-full sm:h-auto lg:max-w-full lg:w-full lg:h-full object-cover lg:h-[300px] h-[70px]"
        />
        <div className="w-full lg:hidden">
          <h2 className="text-3xl text-end sm:pb-3 sm:mb-3 sm:border-b">{meal.title}</h2>
          <div className="sm:flex justify-end hidden">
            <Link to={`/meal/${meal.title}`} state={{ meal }}>
              <SolidBtn className={"w-max lg:hidden"} bgcolour={"bg-violet-500"} text={"View meal"} />
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <Link to={`/meal/${meal.title}`} state={{ meal }}>
          <SolidBtn className={"w-full lg:hidden"} bgcolour={"bg-violet-500"} text={"View meal"} />
        </Link>
      </div>
      <div className="lg:flex-[7] w-full lg:flex flex-col justify-between hidden">
        <h2 className="md:text-3xl text-2xl lg:border-b pb-3 mb-3">{meal.title}</h2>
        <p className="mb-auto border-none pb-3">{truncate(meal.description)}</p>
        <div className="flex justify-between items-center mt-3 border-none pb-0 mb-0 ">
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
            <SolidBtn bgcolour={"bg-violet-500"} text={"View meal"} />
          </Link>
        </div>
      </div>
      <div className="lg:flex-[2] xl:flex-[1] w-full lg:border-l lg:block lg:flex hidden items-start justify-between gap-5 lg:ps-3">
        <ul id="tagList" className="w-full overflow-y-scroll max-h-full">
          {meal.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// return (
//   <div className="p-5 bg-gray-700 gap-5 rounded shadow-lg flex flex-col lg:flex-row text-white lg:h-70">
//     <div className="w-full h-full lg:flex-[3] xl:flex-[2]">
//       <img src={meal.img} alt={meal.title} className="rounded shadow-lg w-full h-full object-cover max-h-[300px]" />
//     </div>
//     <div className="lg:flex-[7] w-full flex flex-col justify-between">
//       <h2 className="text-3xl border-b pb-3 mb-3">{meal.title}</h2>
//       <p className="mb-auto border-b lg:border-none pb-3">{truncate(meal.description)}</p>
//       <div className="lg:flex justify-between items-center mt-3 mb-5 border-b lg:border-none lg:pb-0 lg:mb-0 pb-3">
//         <div className="flex gap-5">
//           <p>
//             <span className="font-semibold">Time:</span> {meal.minsToCook} Mins
//           </p>
//           <p>
//             <span className="font-semibold">Cost:</span> ${meal.costToMake}
//           </p>
//           <p>
//             <span className="font-semibold">Serves:</span> {meal.serves}
//           </p>
//         </div>
//         <Link to={`/meal/${meal.title}`} state={{ meal }}>
//           <SolidBtn className={"hidden lg:block"} bgcolour={"bg-violet-500"} text={"View meal"} />
//         </Link>
//       </div>
//     </div>
//     <div className="lg:flex-[1] w-full lg:border-l lg:block flex items-center justify-between gap-5 lg:ps-3">
//       <ul id="tagList" className="flex flex-wrap gap-5 lg:block overflow-y-scroll max-h-full">
//         {meal.tags.map((tag) => (
//           <li key={tag}>{tag}</li>
//         ))}
//       </ul>
//       <div>
//         <Link to={`/meal/${meal.title}`} state={{ meal }}>
//           <SolidBtn className={"lg:hidden hidden md:block w-max"} bgcolour={"bg-violet-500"} text={"View meal"} />
//         </Link>
//       </div>
//     </div>
//     <div>
//       <Link to={`/meal/${meal.title}`} state={{ meal }}>
//         <SolidBtn className={"w-max mt-5 md:hidden"} bgcolour={"bg-violet-500"} text={"View meal"} />
//       </Link>
//     </div>
//   </div>
// );
