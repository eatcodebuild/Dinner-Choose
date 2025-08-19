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

export function InputGroup({ gap = "gap-2", width, className, inputClass, id, type = "text", label, placeholder, onChange, value }) {
  return (
    <div className={`flex flex-col ${gap} ${width} ${className}`}>
      <Label input={id} label={label} />
      <Input id={id} type={type} placeholder={placeholder} onChange={onChange} value={value} className={inputClass} />
    </div>
  );
}

export function TextAreaGroup({ gap = "gap-2", width, className, id, label, placeholder, rows, value, onChange, textAreaClass, labelClass }) {
  return (
    <div className={`flex flex-col ${gap} ${width} ${className}`}>
      <Label input={id} label={label} className={labelClass} />
      <TextArea id={id} placeholder={placeholder} rows={rows} value={value} onChange={onChange} className={textAreaClass} />
    </div>
  );
}

export function InputUploadGroup({ label, width, value, className }) {
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
        <label className={`cursor-pointer w-full rounded flex gap-3 overflow-hidden ${color} ${className}`}>
          <span className="py-2 px-4 bg-gray-800 hover:bg-violet-500 rounded-l hover:ring-2 hover:ring-violet-400 focus:outline-none transition">Browse</span>
          <input type="file" className="hidden" onChange={handleUpload} value={value} />
          <span className="p-2 text-gray-800">{fileName}</span>
        </label>
      </div>
    </div>
  );
}

export function InputUploadGroupWithIcon({ label, width, onInput, value, className, labelClass }) {
  const [fileName, setFileName] = useState("No file selected");
  const [icon, setIcon] = useState(
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_1358_2896" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="3" y="3" width="18" height="18">
        <path
          d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
          fill="#273B4A"
        />
      </mask>
      <g mask="url(#mask0_1358_2896)">
        <path
          d="M5.40989 12.5901L5.25713 12.7429C4.27646 13.7235 3.78613 14.2139 3.49264 14.8158C3.39066 15.025 3.30712 15.2427 3.24299 15.4664C3.05843 16.1102 3.09488 16.8027 3.16777 18.1877L3.5 24.5H21V19.7573C21 18.3059 21 17.5802 20.7614 16.9207C20.6962 16.7404 20.6181 16.565 20.5277 16.3959C20.1971 15.7774 19.6577 15.2919 18.5789 14.321L18.3643 14.1279C17.4682 13.3214 17.0202 12.9182 16.5078 12.8039C16.1864 12.7322 15.8523 12.741 15.5352 12.8295C15.0295 12.9705 14.6033 13.3967 13.7508 14.2492C13.1184 14.8816 12.8023 15.1977 12.4625 15.2406C12.2519 15.2672 12.0383 15.226 11.8526 15.1231C11.5531 14.9572 11.3742 14.5399 11.0166 13.7053C10.2559 11.9304 9.87554 11.0429 9.22167 10.7151C8.89249 10.5501 8.52413 10.4792 8.1572 10.5101C7.42836 10.5716 6.75554 11.2445 5.40989 12.5901Z"
          fill="#2A4157"
          fillOpacity="0.24"
          stroke="#8b8b8bff"
        />
      </g>
      <path
        d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11Z"
        stroke="#8b8b8bff"
        strokeWidth="1.2"
      />
      <circle cx="16.5" cy="7.5" r="1.5" fill="#8b8b8bff" />
    </svg>
  );

  function truncateFileName(file, max = 13) {
    if (!file) return "No file selected";
    return file.length > max ? file.slice(0, max) + "..." + " ." + file.split(".").pop() : file;
  }

  function handleUpload() {
    setFileName(truncateFileName(value.name) || "No file selected");
    if (value.name) {
      setIcon(
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <label className={`mb-2 ${labelClass}`}>{label}</label>
        <label className={`cursor-pointer p-2 w-full rounded flex gap-3 bg-white overflow-hidden hover:ring-2 hover:ring-violet-400 focus:outline-none transition ${className}`}>
          <span className="flex items-center">{icon}</span>
          <input type="file" className="hidden" onChange={handleUpload} onInput={onInput} />
          <span className=" text-gray-800">{fileName}</span>
        </label>
      </div>
    </div>
  );
}
