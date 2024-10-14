import { useState } from "react";

// ChatGpt 
export default function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    // Gère le boutton clique 
    const handleClickResult = (value) => {
        if(value === "=") {
            try {
                setResult(eval(input))
            } catch(error) {
                setResult(error);
            }
        } else if (value === "C") {
            setInput("");
            setResult(null);

        } else {
            setInput(input + value);
        }
    };

    return(
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="w-80 bg-white rouded-lg shadow-lg p-4">
                <div className="mb-4 text-right">
                    <input 
                        type="text"
                        value={input}
                        className="text-2xl border-none w-full text-right"
                        readOnly
                    />
                    {result !== null && <div className="text=gray-500">{result}</div>}
                </div>
                <div className="grid grid-clos-4 gap2">
                    {["7","8","9","/","4","5","6","x","1","2","3","-",".","0","=","+"].map(
                        (calculatrice_item) => (
                            <button 
                                key={item}
                                className="bg-gray-200 hover:bg-gray-300 p-4 text-xl rounded"
                                onClick={() => handleClickResult(item)}
                            >
                                {item}
                            </button>
                        )
                    )}
                    <button
                        className="col-span-4 bg-red-400 hover:bg-red-500 text-white p-4 text-xl rounded"
                        onClick={() => handleClickResult}
                    >
                        c
                    </button>
                </div>
            </div>
        </div>
    )

}