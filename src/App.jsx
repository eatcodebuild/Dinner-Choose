import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyMenu from "./pages/My-Menu";
import MyMeals from "./pages/My-Meals";
import Meal from "./pages/Meal";
import NewMeal from "./pages/NewMeal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my-menu" element={<MyMenu />} />
        <Route path="/my-meals" element={<MyMeals />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/meal/:title" element={<Meal />} />
        <Route path="/new/meal" element={<NewMeal />} />
      </Routes>
    </Router>
  );
}
