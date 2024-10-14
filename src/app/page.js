// Code provided by ChatGPT (OpenAI's language model)

"use client"; // Indicate that this file is a Client Component

import { useState } from "react";
import { create, all } from 'mathjs'; // Import math.js

// Create a math.js instance
const math = create(all);

export default function Calculator() {
  const [input, setInput] = useState(""); // State for the input expression
  const [result, setResult] = useState(null); // State for the result
  const [theme, setTheme] = useState("light"); // State for the current theme

  // Handle button click
  const handleClickResult = (value) => {
    if (value === "=") {
      try {
        setResult(math.evaluate(input)); // Use math.js to evaluate the expression
      } catch (error) {
        setResult("Error"); // Handle evaluation errors
      }
    } else if (value === "C") {
      setInput(""); // Clear input
      setResult(null); // Reset result
    } else {
      setInput(input + value); // Update input with clicked value
    }
  };

  // Toggle theme between light and dark
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`flex items-center justify-center h-screen ${theme === "light" ? "bg-gradient-to-r from-blue-400 to-purple-600" : "bg-gradient-to-r from-gray-800 to-gray-900"}`}>
      <div className={`w-80 rounded-lg shadow-xl p-6 transition duration-300 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        
        {/* Theme Toggle Switch */}
        <div className="flex justify-end mb-4">
          <span className={`mr-2 text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>Light</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" onChange={toggleTheme} />
            <div className={`w-12 h-6 rounded-full shadow-inner transition duration-200 ${theme === "dark" ? "bg-blue-600" : "bg-gray-300"}`}></div>
            <div className={`absolute left-0 w-6 h-6 bg-white rounded-full shadow transition duration-200 transform ${theme === "dark" ? "translate-x-full" : ""}`}></div>
          </label>
          <span className={`ml-2 text-lg ${theme === "dark" ? "text-white" : "text-black"}`}>Dark</span>
        </div>

        <div className="mb-4 text-right">
          <input
            type="text"
            value={input}
            className={`text-2xl border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full text-right mb-2 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            readOnly
          />
          {result !== null && <div className={`text-gray-600 text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{result}</div>}
        </div>
        <div className="grid grid-cols-4 gap-4">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((calculatrice_item) => (
            <button
              key={calculatrice_item}
              className={`p-4 text-2xl rounded-lg shadow-md transition duration-200 ${theme === "dark" ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"}`}
              onClick={() => handleClickResult(calculatrice_item)}
            >
              {calculatrice_item}
            </button>
          ))}
          <button
            className={`col-span-4 p-4 text-2xl rounded-lg shadow-md transition duration-200 ${theme === "dark" ? "bg-red-600 hover:bg-red-500 text-white" : "bg-red-400 hover:bg-red-500 text-white"}`}
            onClick={() => handleClickResult("C")}
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}
