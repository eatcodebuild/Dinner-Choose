import { InputGroup, InputUploadGroupWithIcon, InputUploadGroup, TextAreaGroup } from "./Inputs";
import SolidBtn from "./Buttons";
import * as Yup from "yup";
import { useRef, useState } from "react";

export default function NewMealForm() {
  const initialFormData = {
    id: Date.now(),
    title: "",
    img: null,
    description: "",
    ingredients: [""],
    minsToCook: "",
    costToMake: "",
    serves: "",
    tags: [""],
    hasRecipe: "",
    steps: [""],
  };

  const imgRef = useRef();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(initialFormData);

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

  async function checkData(formData) {
    const formSchema = Yup.object().shape({
      title: Yup.string().required("Name required"),
      img: Yup.mixed().required("Image required"),
      description: Yup.string().required("Description required"),
      ingredients: Yup.array()
        .of(Yup.string())
        .test("hasIngredient", "Ingredients required", (arr) => arr?.some((i) => i.trim() !== "")),
      minsToCook: Yup.number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Meal preparation time must be a number in minutes")
        .required("Time (mins) required"),
      costToMake: Yup.number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Cost must be a number")
        .required("Cost required"),
      serves: Yup.number()
        .transform((value, originalValue) => (originalValue === "" ? undefined : value))
        .typeError("Number of serves must be a number")
        .required("Servings required"),
      tags: Yup.array()
        .of(Yup.string())
        .test("hasTags", "Tags required", (arr) => arr?.some((i) => i.trim() !== "")),
      hasRecipe: Yup.string()
        .transform((value, originalValue) => (originalValue === "Please Select" || originalValue === "" ? undefined : value))
        .required("Answer required"),
      steps: Yup.array()
        .of(Yup.string())
        .when("hasRecipe", {
          is: "Yes",
          then: (schema) =>
            schema.test("at-least-one-non-empty", "You must provide at least one step", (value) => {
              if (!value) return false;
              return value.some((step) => step.trim() !== "");
            }),
          otherwise: (schema) => schema.notRequired(),
        }),
    });

    try {
      await formSchema.validate(formData, { abortEarly: false });
      return { valid: true, errors: [] };
    } catch (err) {
      const errors = {};
      err.inner.forEach((e) => {
        if (!errors[e.path]) errors[e.path] = e.message;
      });
      return { valid: false, errors };
    }
  }

  async function saveNewMeal() {
    console.log("Form data:", formData);
    const formCheck = await checkData(formData);
    if (!formCheck.valid) {
      console.log(formCheck.errors);
      setErrors(formCheck.errors);
      return alert("fill in form");
    } else {
      setErrors({});

      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => fd.append(key, v));
        } else {
          fd.append(key, value);
        }
      });

      try {
        const response = await fetch("http://localhost:3000/meals/new-meal", {
          method: "POST",
          body: fd, // Need to use FormData() built in API instead to send image files
        });

        if (!response.ok) {
          throw new Error("Error adding meal!");
        }

        const data = await response.json();

        alert(`${fd.get("title")} has been added to library!`);
        setFormData({ ...initialFormData, id: Date.now() });
        if (imgRef.current) imgRef.current.value = null;
        setErrors({});

        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  }

  return (
    <div className="bg-gray-800 text-white p-5 rounded">
      <h1 className="text-4xl text-white mb-5">Create New Meal</h1>
      <div className="grid grid-cols-12 gap-4">
        <InputGroup
          value={formData.title}
          label={errors.title ? `Meal Name (${errors.title})` : "Meal Name"}
          onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
          width={"lg:col-span-8 col-span-12"}
          id={"title"}
          placeholder={"Spaghetti Blognese"}
          className={errors.title ? "text-red-400" : ""}
          inputClass={errors.title ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputUploadGroupWithIcon
          label={errors.img ? `Upload a Picture (${errors.img})` : "Upload a Picture"}
          width={"lg:col-span-4 col-span-12"}
          onInput={(e) => setFormData((prev) => ({ ...prev, img: e.target.files[0] }))}
          value={formData.img}
          labelClass={errors.img ? "text-red-400" : ""}
          className={errors.img ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
          ref={imgRef}
        />
        <TextAreaGroup
          value={formData.description}
          onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
          label={errors.description ? `Meal Description (${errors.description})` : "Meal Description"}
          id={"description"}
          width={"col-span-12"}
          placeholder={"Pasta dish with beef mince tomato sauce"}
          rows={5}
          labelClass={errors.description ? "text-red-400" : ""}
          textAreaClass={errors.description ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputGroup
          value={formData.ingredients}
          onChange={(e) => setFormData((prev) => ({ ...prev, ingredients: e.target.value.split(/[,;| ]+/).map((ingedient) => ingedient.trim()) }))}
          label={errors.ingredients ? `Ingredients (${errors.ingredients})` : "Ingredients"}
          id={"ingredients"}
          width={"lg:col-span-6 col-span-12"}
          placeholder={"Pasta, Onion, Garlic, Sauce, Beef Stock, Beef Mince"}
          className={errors.ingredients ? "text-red-400" : ""}
          inputClass={errors.ingredients ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputGroup
          value={formData.minsToCook}
          onChange={(e) => setFormData((prev) => ({ ...prev, minsToCook: Number(e.target.value) }))}
          label={errors.minsToCook ? `(${errors.minsToCook})` : "Time to Cook (Mins)"}
          id={"time"}
          width={"lg:col-span-3 col-span-6"}
          placeholder={"60"}
          className={errors.minsToCook ? "text-red-400" : ""}
          inputClass={errors.minsToCook ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputGroup
          value={formData.costToMake}
          onChange={(e) => setFormData((prev) => ({ ...prev, costToMake: Number(e.target.value) }))}
          label={errors.costToMake ? `(${errors.costToMake})` : "Meal Cost ($)"}
          id={"cost"}
          width={"lg:col-span-3 col-span-6"}
          placeholder={"20"}
          className={errors.costToMake ? "text-red-400" : ""}
          inputClass={errors.costToMake ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputGroup
          label={errors.serves ? `(${errors.serves})` : "Servings"}
          id={"serves"}
          value={formData.serves}
          onChange={(e) => setFormData((prev) => ({ ...prev, serves: Number(e.target.value) }))}
          width={"lg:col-span-3 col-span-6"}
          placeholder={"4"}
          className={errors.serves ? "text-red-400" : ""}
          inputClass={errors.serves ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <InputGroup
          label={errors.tags ? `Tags (For Filtering) (${errors.tags})` : "Tags (For Filtering)"}
          value={formData.tags}
          onChange={(e) => setFormData((prev) => ({ ...prev, tags: e.target.value.split(/[,;| ]+/).map((tag) => tag.trim()) }))}
          id={"tags"}
          width={"lg:col-span-6 col-span-12"}
          placeholder={"Saucy, Pasta, Italian, Meat"}
          className={errors.tags ? "text-red-400" : ""}
          inputClass={errors.tags ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""}
        />
        <div className="col-span-3">
          <p className={`mb-2 ${errors.hasRecipe ? "text-red-400" : ""}`}>{errors.hasRecipe ? `Recipe (${errors.hasRecipe})` : "Recipe"}</p>
          <select
            className={`rounded p-[9px] bg-white placeholder:text-gray-400 ${
              errors.hasRecipe ? "ring ring-2 ring-red-400 focus:ring-violet-400" : ""
            } focus:outline-none transition w-full text-gray-900`}
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
          <SolidBtn onClick={saveNewMeal} text={"Save New Meal"} />
        </div>
      </div>
    </div>
  );
}
