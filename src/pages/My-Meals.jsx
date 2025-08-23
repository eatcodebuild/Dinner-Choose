import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealItem from "../components/MealItem";
import SolidBtn from "../components/Buttons";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MyMeals() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMeals() {
      try {
        const response = await fetch("http://localhost:3000/meals");

        if (!response.ok) {
          throw new Error("Error grabbing all the meals!");
        }

        const data = await response.json();
        // console.log(data);
        setMeals(data);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    }
    getMeals();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        <div className="mx-auto my-15 p-3 sm:p-5 md:p-8 rounded bg-gray-500">
          <div className="flex gap-10 flex-wrap justify-between items-center mb-10">
            <h1 className="text-5xl text-white">My Meals</h1>
            <div className="flex gap-2">
              <Link to={"/new/meal"}>
                <SolidBtn text={"+ New Meal"} bgcolour={"bg-transparent"} className={"border hover:border-transparent"} />
              </Link>
              <SolidBtn text={"Edit Meals"} bgcolour={"bg-transparent"} className={"border hover:border-transparent"} />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {loading ? <p className="w-full text-center text-5xl text-white">Loading...</p> : meals.map((meal) => <MealItem key={meal.id} meal={meal} />)}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
