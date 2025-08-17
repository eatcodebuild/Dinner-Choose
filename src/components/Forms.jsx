import { InputGroup } from "./Inputs";
import { InputUploadGroup } from "./Inputs";
import { TextAreaGroup } from "./Inputs";
import SolidBtn from "./Buttons";
import { useState } from "react";

export default function NewMealForm() {
  const [steps, setSteps] = useState([""]);
  const [hasRecipe, setHasRecipe] = useState("");

  function appendStep() {
    setSteps((prev) => [...prev, ""]);
  }

  function removeStep() {
    if (steps.length > 1) {
      setSteps((prev) => prev.slice(0, -1));
    }
  }

  function updateStep(index, value) {
    setSteps((prev) => {
      const copy = [...prev];
      copy[index] = value;
      return copy;
    });
  }

  return (
    <div className="bg-gray-500 text-white p-5 rounded">
      <h1 className="text-4xl text-white mb-5">Create New Meal</h1>
      <div className="grid grid-cols-12 gap-4">
        <InputGroup label={"Meal Name"} width={"lg:col-span-8 col-span-12"} id={"name"} placeholder={"Spaghetti Blognese"} />
        <InputUploadGroup label={"Upload a Picture"} width={"lg:col-span-4 col-span-12"} />
        <TextAreaGroup label={"Meal Description"} id={"description"} width={"col-span-12"} placeholder={"Pasta dish with beef mince tomato sauce"} rows={5} />
        <InputGroup label={"Ingredients"} id={"ingredients"} width={"lg:col-span-6 col-span-12"} placeholder={"Pasta, Onion, Garlic, Sauce, Beef Stock, Beef Mince"} />
        <InputGroup label={"Time to Cook (Mins)"} id={"time"} width={"lg:col-span-3 col-span-6"} placeholder={"60"} />
        <InputGroup label={"Meal Cost ($)"} id={"cost"} width={"lg:col-span-3 col-span-6"} placeholder={"20"} />
        <InputGroup label={"Servings"} id={"serves"} width={"lg:col-span-3 col-span-6"} placeholder={"4"} />
        <InputGroup label={"Tags (For Filtering)"} id={"tags"} width={"lg:col-span-6 col-span-12"} placeholder={"Saucy, Pasta, Italian, Meat"} />
        <div className="col-span-3">
          <p className="mb-2">Recipe</p>
          <select
            id="hasRecipe"
            className="rounded p-[9px] bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition w-full text-gray-900"
            value={hasRecipe}
            onChange={(e) => {
              setHasRecipe(e.target.value);
            }}
          >
            <option value="" disabled>
              Please Select
            </option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        {hasRecipe === "Yes" && (
          <div className="col-span-12 mt-5">
            <h3 className="font-semibold mb-3 text-2xl">Recipe Method</h3>
            <div className="grid grid-cols-12 gap-4">
              {steps.map((step, i) => (
                <TextAreaGroup key={i} value={step} onChange={(e) => updateStep(i, e.target.value)} label={`Step ${i + 1}`} width={"col-span-12"} placeholder={""} rows={1} />
              ))}
            </div>
            <div className="flex gap-2 mt-5">
              <SolidBtn onClick={appendStep} text={"+ Add"} bgcolour={"bg-blue-400"} hover={"hover:bg-blue-500"} />
              <SolidBtn onClick={removeStep} text={"- Remove"} bgcolour={"bg-red-400"} hover={"hover:bg-red-500"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
