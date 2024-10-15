// Code provided by ChatGPT (OpenAI's language model)

"use client"; // Indique ce fichier composant client

import { useState } from "react"; // import useState
import { create, all } from 'mathjs'; // import math.js

// Créer instance mathjs
const math = create(all);

export default function Calculator() {
  const [input, setInput] = useState(""); // State pour input chiffre/opérateur
  const [result, setResult] = useState(null); // State pour le résultat opération
  const [theme, setTheme] = useState("light"); // State pour thème calculatrice courante

  // Gère opération quand click boutons
  const handleClickResult = (value) => {
    if (value === "=") {
      try {
        setResult(math.evaluate(input)); // calcule résultat
      } catch (error) {
        setResult("Error"); 
      }
    } else if (value === "C") {
      setInput(""); // efface tout input rentré
      setResult(null); 
    } else if (value === "DEL") {
      if (input.length > 0) {
        setInput(input.slice(0, -1)); // Supprimer dernier caractère entré
      }
    } else if (value === "%") {
      try {
        setResult(math.evaluate(`${input} / 100`)); // Transforme en pourcentage
      } catch (error) {
        setResult("Error"); 
      }
    } else {
      setInput(input + value); // Append valeurs quand on click
    }
  };

  // Permet changement thème
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className={`flex items-center justify-center h-screen ${theme === "light" ? "bg-gradient-to-r from-blue-400 to-purple-600" : "bg-gradient-to-r from-gray-800 to-gray-900"}`}>
      <div className={`w-200 rounded-lg shadow-xl p-6 transition duration-300 ${theme === "dark" ? "bg-gray-800" : "bg-white"}`}>
        
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

        {/* Input display */}
        <div className="mb-4 text-right">
          <input
            type="text"
            value={input}
            className={`text-2xl border-b border-gray-300 focus:outline-none focus:border-blue-500 w-full text-right mb-2 ${theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"}`}
            readOnly
          />
          {/* Résultat display */}
          {result !== null && <div className={`text-gray-600 text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{result}</div>}
        </div>

        {/* Affcihage bouton calculatrices*/}
        <div className="grid grid-cols-4 gap-4">
          {["(", ")", "%", "C", "7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((calculatrice_item) => (
            <button
              key={calculatrice_item}
              className={`w-16 h-16 p-4 text-2xl rounded-lg shadow-md transition duration-200 ${theme === "dark" ? "bg-gray-600 hover:bg-gray-500 text-white" : "bg-gray-200 hover:bg-gray-300 text-black"}`}
              onClick={() => handleClickResult(calculatrice_item)}
            >
              {calculatrice_item}
            </button>
          ))}

          {/* Affichage bouton DEL */}
          <button
            className={`col-span-4 w-full h-16 p-4 text-2xl rounded-lg shadow-md transition duration-200 ${theme === "dark" ? "bg-red-600 hover:bg-red-500 text-white" : "bg-red-400 hover:bg-red-500 text-white"}`}
            onClick={() => handleClickResult("DEL")}
          >
            DEL
          </button>
        </div>
      </div>
    </div>
  );
}
