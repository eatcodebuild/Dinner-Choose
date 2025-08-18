import { useState } from "react";

export default function Input({ placeholder, type = "text", className, id, onChange, value }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`rounded p-2 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition w-full text-gray-900 ${className}`}
      onChange={onChange}
      value={value}
    />
  );
}

export function TextArea({ placeholder, className, id, rows, value, onChange }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      className={`rounded p-2 bg-white placeholder:text-gray-400 focus:ring-2 focus:ring-violet-400 focus:outline-none transition w-full text-gray-900 ${className}`}
      rows={rows}
      value={value}
      onChange={onChange}
    ></textarea>
  );
}

export function Label({ label, input, className }) {
  return (
    <label htmlFor={input} className={className}>
      {label}
    </label>
  );
}

export function InputGroup({ gap = "gap-2", width, className, id, type = "text", label, placeholder, onChange, value }) {
  return (
    <div className={`flex flex-col ${gap} ${width} ${className}`}>
      <Label input={id} label={label} />
      <Input id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} />
    </div>
  );
}

export function TextAreaGroup({ gap = "gap-2", width, className, id, label, placeholder, rows, value, onChange }) {
  return (
    <div className={`flex flex-col ${gap} ${width} ${className}`}>
      <Label input={id} label={label} />
      <TextArea id={id} placeholder={placeholder} rows={rows} value={value} onChange={onChange} />
    </div>
  );
}

export function InputUploadGroup({ label, width, value }) {
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
          <span className="py-2 px-4 bg-gray-800 hover:bg-violet-500 hover:outline-violet-600 rounded-l outline outline-2 outline-offset-[-2px] outline-gray-800 transition">
            Browse
          </span>
          <input type="file" className="hidden" onChange={handleUpload} value={value} />
          <span className="p-2 text-gray-800">{fileName}</span>
        </label>
      </div>
    </div>
  );
}

export function InputUploadGroupWithIcon({ label, width, value }) {
  const [fileName, setFileName] = useState("No file selected");
  const [icon, setIcon] = useState(
    <svg width="18px" height="18px" viewBox="0 -2 30 30" xmlns="http://www.w3.org/2000/svg">
      <title>upload</title>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-569.000000, -674.000000)" fill="#000000ff">
          <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 Z" />
        </g>
      </g>
    </svg>
  );

  function truncateFileName(file, max = 13) {
    if (!file) return "No file selected";
    return file.length > max ? file.slice(0, max) + "..." + " ." + file.split(".").pop() : file;
  }

  function handleUpload(e) {
    setFileName(truncateFileName(e.target.files[0]?.name) || "No file selected");
    if (e.target.files[0]) {
      setIcon(
        <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g strokeWidth="0" />
          <g strokeLinecap="round" strokeLinejoin="round" />
          <g>
            <path
              d="M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM16.78 9.7L11.11 15.37C10.97 15.51 10.78 15.59 10.58 15.59C10.38 15.59 10.19 15.51 10.05 15.37L7.22 12.54C6.93 12.25 6.93 11.77 7.22 11.48C7.51 11.19 7.99 11.19 8.28 11.48L10.58 13.78L15.72 8.64C16.01 8.35 16.49 8.35 16.78 8.64C17.07 8.93 17.07 9.4 16.78 9.7Z"
              fill="#259434ff"
            />
          </g>
        </svg>
      );
    }
  }
  return (
    <div className={`${width} flex items-end`}>
      <div className="flex flex-col w-full">
        <label className="mb-2">{label}</label>
        <label className="cursor-pointer p-2 w-full rounded flex gap-3 bg-white overflow-hidden hover:outline-violet-300 outline outline-2 outline-offset-[-2px] transition">
          <span className="flex items-center">{icon}</span>
          <input type="file" className="hidden" onChange={handleUpload} value={value} />
          <span className=" text-gray-800">{fileName}</span>
        </label>
      </div>
    </div>
  );
}
