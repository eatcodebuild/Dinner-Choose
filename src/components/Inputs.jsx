import { useState } from "react";

export default function Input({ placeholder, type = "text", className, id }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`rounded p-2 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition w-full text-gray-900 ${className}`}
    />
  );
}

export function Label({ label, input, className }) {
  return (
    <label for={input} className={className}>
      {label}
    </label>
  );
}

export function InputGroup({ gap = "gap-2", width, className, id, type = "text", label, placeholder }) {
  return (
    <div className={`flex flex-col ${gap} ${width} ${className}`}>
      <Label input={id} label={label} />
      <Input id={id} type={type} placeholder={placeholder} />
    </div>
  );
}

export function InputUploadGroup({ label, width }) {
  const [fileName, setFileName] = useState("No file selected");
  const [color, setColor] = useState("bg-white");

  function truncateFileName(file, max = 13) {
    if (!file) return "No file selected";
    return file.length > max ? file.slice(0, max) + "..." + " ." + file.split(".").pop() : file;
  }

  function handleUpload(e) {
    setFileName(truncateFileName(e.target.files[0]?.name) || "No file selected");
    if (e.target.files[0]) setColor("bg-violet-200");
  }
  return (
    <div className={`${width} flex items-end`}>
      <div className="flex flex-col w-full">
        <label className="mb-2">{label}</label>
        <label className={`cursor-pointer w-full rounded flex gap-3 overflow-hidden ${color}`}>
          <span className="p-2 bg-gray-800 hover:bg-violet-400 transition">Browse</span>
          <input type="file" className="hidden" onChange={handleUpload} />
          <span className="p-2 text-gray-800">{fileName}</span>
        </label>
      </div>
    </div>
  );
}
