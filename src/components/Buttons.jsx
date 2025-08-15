export default function SolidBtn({ text, bgcolour, className, textcolour }) {
  return (
    <button
      className={`${bgcolour ? bgcolour : "bg-violet-500"} ${className} py-2 px-7 ${
        textcolour ? textcolour : "text-white"
      } rounded shadow-sm cursor-pointer hover:bg-violet-400 transition`}
    >
      {text}
    </button>
  );
}
