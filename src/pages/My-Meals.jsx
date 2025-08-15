import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MealItem from "../components/MealItem";

const meals = [
  {
    id: 1,
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
    recipeMethod: {
      1: "Heat oil in pan and sauté garlic and onion until soft.",
      2: "Add beef mince and cook until browned.",
      3: "Stir in diced tomatoes, beef stock, basil, and herbs.",
      4: "Simmer for 40 minutes, stirring occasionally.",
      5: "Serve over cooked pasta with parmesan cheese.",
    },
  },
  {
    id: 2,
    title: "Chicken Stir-Fry",
    img: "/dinnerPics/Chicken-Stir-Fry.webp",
    description: "Quick Asian-style stir-fried chicken with vegetables",
    ingredients: ["chicken breast", "soy sauce", "garlic", "ginger", "capsicum", "broccoli", "carrot", "sesame oil", "rice"],
    serves: 4,
    tags: ["asian", "quick", "healthy"],
    minsToCook: 25,
    costToMake: 18,
    hasRecipe: true,
    recipeMethod: {
      1: "Slice chicken and vegetables.",
      2: "Heat sesame oil in a wok and add garlic and ginger.",
      3: "Add chicken and cook until no longer pink.",
      4: "Toss in vegetables and stir-fry until tender-crisp.",
      5: "Serve with steamed rice.",
    },
  },
  {
    id: 3,
    title: "Beef Tacos",
    img: "/dinnerPics/beefTacos.jpg",
    description: "Crispy taco shells filled with seasoned beef and toppings",
    ingredients: ["beef mince", "taco seasoning", "lettuce", "tomato", "cheddar cheese", "sour cream", "taco shells"],
    serves: 4,
    tags: ["mexican", "quick", "family"],
    minsToCook: 20,
    costToMake: 15,
    hasRecipe: true,
    recipeMethod: {
      1: "Brown mince in pan.",
      2: "Add taco seasoning and water, simmer for 5 mins.",
      3: "Fill taco shells with beef mixture.",
      4: "Top with lettuce, tomato, cheese, and sour cream.",
      5: "Serve immediately.",
    },
  },
  {
    id: 4,
    title: "Vegetable Lasagna",
    img: "/dinnerPics/vegLasagna.jpg",
    description: "Layered pasta bake with vegetables and cheese",
    ingredients: ["lasagna sheets", "zucchini", "eggplant", "capsicum", "ricotta", "spinach", "tomato passata", "mozzarella"],
    serves: 4,
    tags: ["vegetarian", "baked", "comfort"],
    minsToCook: 75,
    costToMake: 22,
    hasRecipe: true,
    recipeMethod: {
      1: "Roast vegetables until tender.",
      2: "Layer lasagna sheets, vegetables, ricotta, and passata.",
      3: "Repeat layers and top with mozzarella.",
      4: "Bake at 180°C for 45 minutes.",
      5: "Let rest before serving.",
    },
  },
  {
    id: 5,
    title: "BBQ Pulled Pork Sandwich",
    img: "/dinnerPics/pulledPork.jpg",
    description: "Slow-cooked pork with BBQ sauce served in buns",
    ingredients: ["pork shoulder", "BBQ sauce", "onion", "garlic", "burger buns", "coleslaw"],
    serves: 4,
    tags: ["american", "slow-cook", "meat"],
    minsToCook: 480,
    costToMake: 28,
    hasRecipe: true,
    recipeMethod: {
      1: "Place pork, onion, and garlic in slow cooker.",
      2: "Pour over BBQ sauce and cook on low for 8 hours.",
      3: "Shred pork with forks.",
      4: "Serve in buns with coleslaw.",
      5: "Enjoy warm.",
    },
  },
  {
    id: 6,
    title: "Margherita Pizza",
    img: "/dinnerPics/pizza.jpg",
    description: "Classic Italian pizza with tomato, mozzarella, and basil",
    ingredients: ["pizza dough", "tomato passata", "mozzarella", "fresh basil", "olive oil"],
    serves: 4,
    tags: ["italian", "vegetarian", "baked"],
    minsToCook: 20,
    costToMake: 12,
    hasRecipe: true,
    recipeMethod: {
      1: "Preheat oven to 250°C.",
      2: "Spread passata over pizza dough.",
      3: "Top with mozzarella and basil.",
      4: "Bake for 7-10 minutes.",
      5: "Drizzle with olive oil and serve.",
    },
  },
  {
    id: 7,
    title: "Butter Chicken",
    img: "/dinnerPics/butterChicken.jpg",
    description: "Creamy tomato-based Indian chicken curry",
    ingredients: ["chicken thigh", "butter", "cream", "garlic", "ginger", "garam masala", "tomato puree", "rice"],
    serves: 4,
    tags: ["indian", "curry", "creamy"],
    minsToCook: 45,
    costToMake: 25,
    hasRecipe: true,
    recipeMethod: {
      1: "Marinate chicken in spices.",
      2: "Cook chicken in butter until browned.",
      3: "Add tomato puree and simmer.",
      4: "Stir in cream and cook for 10 minutes.",
      5: "Serve with rice.",
    },
  },
  {
    id: 8,
    title: "Beef Stroganoff",
    img: "/dinnerPics/beefStroganoff.jpg",
    description: "Creamy beef and mushroom sauce served over pasta",
    ingredients: ["beef strips", "mushrooms", "onion", "garlic", "sour cream", "paprika", "pasta"],
    serves: 4,
    tags: ["creamy", "meat", "comfort"],
    minsToCook: 40,
    costToMake: 24,
    hasRecipe: true,
    recipeMethod: {
      1: "Sear beef strips and set aside.",
      2: "Cook onion, garlic, and mushrooms.",
      3: "Add paprika and sour cream.",
      4: "Return beef to pan and heat through.",
      5: "Serve over pasta.",
    },
  },
];

export default function MyMeals() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-3">
        <div className="mx-auto my-15 p-3 sm:p-5 md:p-8 rounded bg-gray-500">
          <h1 className="text-5xl text-white mb-10">My Meals</h1>
          <div className="flex flex-col gap-5">
            {meals.map((meal) => (
              <MealItem meal={meal} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
