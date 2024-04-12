export const ButtonIndex = ({
  children,
  variant = "outline",
  isBold = false,
  className = "",
}) => {
  return (
    <button
      className={`flex items-center justify-center p-4 rounded font-graphik text-xl leading-5 ${
        variant === "outline"
          ? "text-purple-600 font-Space_Grotesk font-purple-600 border-solid border-2 w-36 h-11 font-purple-700 py-2 px-4 text-purple border-purple-700 rounded"
          : "w-36 h-11 py-2 px-4 border bg-midnight border-purple-700 rounded font-Space_Grotesk text-white"
      }
        ${isBold && "font-graphik-bold"}
        ${className}
        `}
    >
      {children}
    </button>
  );
};
