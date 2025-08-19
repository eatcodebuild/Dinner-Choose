import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealItem from "../components/MealItem";
import SolidBtn from "../components/Buttons";
import { Link } from "react-router-dom";

let mealId = 1;
const meals = [
  {
    id: mealId++,
    title: "Spaghetti Bolognese",
    img: "/dinnerPics/bolognese.webp",
    description:
      "Pasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomatoPasta dish with beef mince tomato saucePasta dish with beef mince tomato saucePasta dish with beef mince tomato saucePasta dish with beef mince tomato saucePasta dish with beef mince tomato sauce",
    ingredients: ["beef mince", "garlic", "onion", "pasta", "diced tomatoes", "beef stock", "fresh basil", "herbs", "parmesan cheese"],
    serves: 4,
    tags: ["pasta", "meat", "saucy", "cheap", "pasta", "meat", "saucy", "cheap", "pasta", "meat", "saucy", "cheap", "pasta", "meat", "saucy", "cheap"],
    minsToCook: 60,
    costToMake: 20,
    hasRecipe: true,
    recipeMethod: [
      "Heat oil in pan and sauté garlic and onion until soft.",
      "Add beef mince and cook until browned.",
      "Stir in diced tomatoes, beef stock, basil, and herbs.",
      "Simmer for 40 minutes, stirring occasionally.",
      "Serve over cooked pasta with parmesan cheese.",
    ],
  },
  {
    id: mealId++,
    title: "Chicken Stir-Fry",
    img: "/dinnerPics/Chicken-Stir-Fry.webp",
    description: "Quick Asian-style stir-fried chicken with vegetables",
    ingredients: ["chicken breast", "soy sauce", "garlic", "ginger", "capsicum", "broccoli", "carrot", "sesame oil", "rice"],
    serves: 4,
    tags: ["asian", "quick", "healthy"],
    minsToCook: 25,
    costToMake: 18,
    hasRecipe: true,
    recipeMethod: [
      "Slice chicken and vegetables.",
      "Heat sesame oil in a wok and add garlic and ginger.",
      "Add chicken and cook until no longer pink.",
      "Toss in vegetables and stir-fry until tender-crisp.",
      "Serve with steamed rice.",
    ],
  },
  {
    id: mealId++,
    title: "Beef Tacos",
    img: "/dinnerPics/beefTacos.jpg",
    description: "Crispy taco shells filled with seasoned beef and toppings",
    ingredients: ["beef mince", "taco seasoning", "lettuce", "tomato", "cheddar cheese", "sour cream", "taco shells"],
    serves: 4,
    tags: ["mexican", "quick", "family"],
    minsToCook: 20,
    costToMake: 15,
    hasRecipe: false,
    recipeMethod: null,
  },
  {
    id: mealId++,
    title: "Vegetable Lasagna",
    img: "/dinnerPics/vegLasagna.jpg",
    description: "Layered pasta bake with vegetables and cheese",
    ingredients: ["lasagna sheets", "zucchini", "eggplant", "capsicum", "ricotta", "spinach", "tomato passata", "mozzarella"],
    serves: 4,
    tags: ["vegetarian", "baked", "comfort"],
    minsToCook: 75,
    costToMake: 22,
    hasRecipe: true,
    recipeMethod: [
      "Roast vegetables until tender.",
      "Layer lasagna sheets, vegetables, ricotta, and passata.",
      "Repeat layers and top with mozzarella.",
      "Bake at 180°C for 45 minutes.",
      "Let rest before serving.",
    ],
  },
  {
    id: mealId++,
    title: "BBQ Pulled Pork Sandwich",
    img: "/dinnerPics/pulledPork.jpg",
    description: "Slow-cooked pork with BBQ sauce served in buns",
    ingredients: ["pork shoulder", "BBQ sauce", "onion", "garlic", "burger buns", "coleslaw"],
    serves: 4,
    tags: ["american", "slow-cook", "meat"],
    minsToCook: 480,
    costToMake: 28,
    hasRecipe: true,
    recipeMethod: [
      "Place pork, onion, and garlic in slow cooker.",
      "Pour over BBQ sauce and cook on low for 8 hours.",
      "Shred pork with forks.",
      "Serve in buns with coleslaw.",
      "Enjoy warm.",
    ],
  },
  {
    id: mealId++,
    title: "Margherita Pizza",
    img: "/dinnerPics/pizza.jpg",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    ingredients: ["pizza dough", "tomato passata", "mozzarella", "fresh basil", "olive oil"],
    serves: 4,
    tags: ["italian", "vegetarian", "baked"],
    minsToCook: 20,
    costToMake: 12,
    hasRecipe: true,
    recipeMethod: ["Preheat oven to 250°C.", "Spread passata over pizza dough.", "Top with mozzarella and basil.", "Bake for 7-10 minutes.", "Drizzle with olive oil and serve."],
  },
  {
    id: mealId++,
    title: "Butter Chicken",
    img: "/dinnerPics/butterChicken.jpg",
    description: "Creamy tomato-based Indian chicken curry",
    ingredients: ["chicken thigh", "butter", "cream", "garlic", "ginger", "garam masala", "tomato puree", "rice"],
    serves: 4,
    tags: ["indian", "curry", "creamy"],
    minsToCook: 45,
    costToMake: 25,
    hasRecipe: true,
    recipeMethod: [
      "Marinate chicken in spices.",
      "Cook chicken in butter until browned.",
      "Add tomato puree and simmer.",
      "Stir in cream and cook for 10 minutes.",
      "Serve with rice.",
    ],
  },
  {
    id: mealId++,
    title: "Beef Stroganoff",
    img: "/dinnerPics/beefStroganoff.jpg",
    description: "Creamy beef and mushroom sauce served over pasta",
    ingredients: ["beef strips", "mushrooms", "onion", "garlic", "sour cream", "paprika", "pasta"],
    serves: 4,
    tags: ["creamy", "meat", "comfort"],
    minsToCook: 40,
    costToMake: 24,
    hasRecipe: true,
    recipeMethod: [
      "Sear beef strips and set aside.",
      "Cook onion, garlic, and mushrooms.",
      "Add paprika and sour cream.",
      "Return beef to pan and heat through.",
      "Serve over pasta.",
    ],
  },
];

export default function MyMeals() {
  return (
    <div className="bg-white">
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
            {meals.map((meal) => (
              <MealItem meal={meal} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
