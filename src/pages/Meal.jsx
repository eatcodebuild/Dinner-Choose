import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealPageItem from "../components/MealPageItem";
import { useLocation, useNavigate, Link } from "react-router-dom";
import SolidBtn from "../components/Buttons";
import { useState } from "react";

export default function Meal() {
  const [editMeal, setEditMeal] = useState(false);
  const [mealDeleted, setMealDeleted] = useState(false);
  const location = useLocation();
  const { meal } = location.state;
  const navigate = useNavigate();

  async function deleteMeal() {
    try {
      console.log(meal.id, meal);
      const response = await fetch(`http://localhost:3000/meals/delete/${meal.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Error deleting meal", response.status);

      const data = await response.json();
      setMealDeleted(true);
      setTimeout(() => {
        navigate("/my-meals"); // redirect
      }, 700);
      console.log("deleted task", data);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-15">
        <div className="flex justify-between mb-5">
          <Link to={"/my-meals"}>
            <SolidBtn text={"← Back"} />
          </Link>
          <div className="flex gap-2">
            <SolidBtn onClick={() => setEditMeal(true)} text={"Edit"} bgcolour={"bg-orange-400"} hover={"hover:bg-orange-500"} />
            <SolidBtn onClick={deleteMeal} text={"Delete"} bgcolour={"bg-red-400"} hover={"hover:bg-red-500"} />
          </div>
        </div>
        <MealPageItem editMeal={editMeal} deleted={mealDeleted} meal={meal} />
      </div>
      <Footer />
    </>
  );
}
