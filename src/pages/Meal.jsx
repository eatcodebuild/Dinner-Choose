import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealPageItem from "../components/MealPageItem";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SolidBtn from "../components/Buttons";

export default function Meal() {
  const location = useLocation();
  const { meal } = location.state;
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-15">
        <div className="flex justify-between mb-5">
          <Link to={"/my-meals"}>
            <SolidBtn text={"← Back"} />
          </Link>
          <SolidBtn text={"Edit Meal"} bgcolour={"bg-orange-500"} hover={"hover:bg-orange-400"} />
        </div>
        <MealPageItem meal={meal} />
      </div>
      <Footer />
    </>
  );
}
