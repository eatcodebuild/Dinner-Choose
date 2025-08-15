import SolidBtn from "./Buttons";

export default function MealPageItem({ meal }) {
  return (
    <div className="p-5 lg:p-10 md:p-7 bg-gray-700 rounded text-white">
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-[4]">
          <img src={meal.img} alt={meal.title} className="rounded shadow-lg w-full h-full object-cover max-h-[450px] " />
        </div>
        <div className="lg:flex-[5] w-full flex flex-col justify-between">
          <h2 className="text-7xl underline mb-8">{meal.title}</h2>
          <p className="mb-auto border-b lg:border-none pb-3">{meal.description}</p>
          <div className="lg:flex justify-between items-center mt-3 mb-5 pb-3 lg:hidden">
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
            {/* <SolidBtn className={"hidden lg:block"} bgcolour={"bg-violet-500"} text={"View meal"} /> */}
          </div>
        </div>
        <div className="lg:flex-[1] w-full flex lg:hidden items-center justify-between gap-5 lg:ps-3">
          <ul id="tagList" className="flex flex-wrap gap-5 lg:block overflow-y-scroll max-h-full">
            {meal.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          <div>
            <SolidBtn className={"lg:hidden hidden md:block w-max"} bgcolour={"bg-violet-500"} text={"View meal"} />
          </div>
        </div>
        <div>
          <SolidBtn className={"w-max mt-5 md:hidden"} bgcolour={"bg-violet-500"} text={"View meal"} />
        </div>
      </div>
      <div className="">
        <div className="hidden lg:block border">
          <ul id="tagList" className="flex flex-wrap gap-5 lg:block overflow-y-scroll max-h-full">
            {meal.tags.map((tag, i) => (
              <li key={i}>{tag}</li>
            ))}
          </ul>
          <div>
            <SolidBtn className={"lg:hidden hidden md:block w-max"} bgcolour={"bg-violet-500"} text={"View meal"} />
          </div>
        </div>
        <div className="lg:flex justify-between items-center mt-3 mb-5 pb-3 border hidden lg:block">
          <div className="flex gap-5 border">
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
          {/* <SolidBtn className={"hidden lg:block"} bgcolour={"bg-violet-500"} text={"View meal"} /> */}
        </div>
      </div>
    </div>
  );
}
