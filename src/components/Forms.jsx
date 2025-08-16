import { InputGroup } from "./Inputs";
import { InputUploadGroup } from "./Inputs";
// import { Label } from "./Inputs";
// import Input from "./Inputs";

export default function NewMealForm() {
  return (
    <div className="bg-gray-500 text-white p-5 rounded">
      <h1 className="text-4xl text-white mb-5">Create New Meal</h1>
      <div className="grid grid-cols-12 gap-4">
        <InputGroup label={"Meal Name"} width={"lg:col-span-8 col-span-12"} id={"this"} placeholder={"Spaghetti Blognese"} />
        <InputUploadGroup label={"Upload a Picture"} width={"lg:col-span-4 col-span-12"} />
      </div>
    </div>
  );
}
