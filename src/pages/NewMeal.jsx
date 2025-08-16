import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SolidBtn from "../components/Buttons";
import { Link } from "react-router-dom";
import NewMealForm from "../components/Forms";

export default function NewMeal() {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-15">
        <div className="flex justify-between mb-5">
          <Link to={"/my-meals"}>
            <SolidBtn text={"← Back"} />
          </Link>
        </div>
        <div className="max-w-[900px] mx-auto">
          <NewMealForm />
        </div>
      </div>
      <Footer />
    </div>
  );
}
