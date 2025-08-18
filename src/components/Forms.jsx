import { InputGroup, InputUploadGroupWithIcon, InputUploadGroup, TextAreaGroup } from "./Inputs";
import SolidBtn from "./Buttons";
import { useState } from "react";

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

//----------------------- FINISH COST, TIME AND UPLOAD -----------------------

export default function NewMealForm() {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    ingredients: [""],
    time: "",
    cost: "",
    serves: "",
    tags: [""],
    hasRecipe: "",
    steps: [""],
  });

  function appendStep() {
    setFormData((prev) => ({
      ...prev,
      steps: [...prev.steps, ""],
    }));
  }

  function removeStep() {
    setFormData((prev) => {
      if (prev.steps.length <= 1) return prev;
      const newSteps = prev.steps.slice(0, -1);
      return { ...prev, steps: newSteps };
    });
  }

  function updateSteps(e, i) {
    const value = e.target.value;
    setFormData((prev) => {
      const newSteps = [...prev.steps];
      newSteps[i] = value;
      return { ...prev, steps: newSteps };
    });
  }

  // function saveNewMeal(newMeal) {}
  window.addEventListener("change", () => console.log(formData));

  return (
    <div className="bg-gray-800 text-white p-5 rounded">
      <h1 className="text-4xl text-white mb-5">Create New Meal</h1>
      <div className="grid grid-cols-12 gap-4">
        <InputGroup
          value={formData.name}
          label={"Meal Name"}
          onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
          width={"lg:col-span-8 col-span-12"}
          id={"name"}
          placeholder={"Spaghetti Blognese"}
        />
        <InputUploadGroupWithIcon label={"Upload a Picture"} width={"lg:col-span-4 col-span-12"} />
        <TextAreaGroup
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          label={"Meal Description"}
          id={"description"}
          width={"col-span-12"}
          placeholder={"Pasta dish with beef mince tomato sauce"}
          rows={5}
        />
        <InputGroup
          value={formData.ingredients}
          onChange={(e) => setFormData((prev) => ({ ...prev, ingredients: e.target.value.split(/[,;| ]+/).map((ingedient) => ingedient.trim()) }))}
          label={"Ingredients"}
          id={"ingredients"}
          width={"lg:col-span-6 col-span-12"}
          placeholder={"Pasta, Onion, Garlic, Sauce, Beef Stock, Beef Mince"}
        />
        <InputGroup value={formData.time} label={"Time to Cook (Mins)"} id={"time"} width={"lg:col-span-3 col-span-6"} placeholder={"60"} />
        <InputGroup value={formData.cost} label={"Meal Cost ($)"} id={"cost"} width={"lg:col-span-3 col-span-6"} placeholder={"20"} />
        <InputGroup
          label={"Servings"}
          id={"serves"}
          value={formData.serves}
          onChange={(e) => setFormData((prev) => ({ ...prev, serves: e.target.value }))}
          width={"lg:col-span-3 col-span-6"}
          placeholder={"4"}
        />
        <InputGroup
          label={"Tags (For Filtering)"}
          value={formData.tags}
          onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value.split(/[,;| ]+/).map((tag) => tag.trim()) }))}
          id={"tags"}
          width={"lg:col-span-6 col-span-12"}
          placeholder={"Saucy, Pasta, Italian, Meat"}
        />
        <div className="col-span-3">
          <p className="mb-2">Recipe</p>
          <select
            className="rounded p-[9px] bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition w-full text-gray-900"
            value={formData.hasRecipe}
            onChange={(e) => {
              setFormData((prevData) => ({ ...prevData, hasRecipe: e.target.value }));
            }}
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {formData.hasRecipe === "Yes" && (
          <div className="col-span-12 mt-5">
            <h3 className="font-semibold mb-3 text-2xl">Recipe Method</h3>
            <div className="grid grid-cols-12 gap-4">
              {formData.steps.map((step, i) => (
                <TextAreaGroup key={i} value={step} onChange={(e) => updateSteps(e, i)} label={`Step ${i + 1}`} width={"col-span-12"} placeholder={""} rows={1} />
              ))}
            </div>
            <div className="flex gap-2 mt-5">
              <SolidBtn onClick={appendStep} text={"+ Add"} bgcolour={"bg-blue-400"} hover={"hover:bg-blue-500"} />
              <SolidBtn onClick={removeStep} text={"- Remove"} bgcolour={"bg-red-400"} hover={"hover:bg-red-500"} />
            </div>
          </div>
        )}
        <div className="w-full w-max mt-5">
          <SolidBtn text={"Save New Meal"} />
        </div>
      </div>
    </div>
  );
}
