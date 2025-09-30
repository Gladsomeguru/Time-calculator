import { useState } from "react";

const buttons = [
    "AC", "C", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3","+", "0", "00", "."
];


function Calculator() {
    const [num, setNum] = useState("0");
    const onHandler = (value) => {
  if (value === "AC") {
    setNum("0");
  } else if (value === "C") {
    setNum(() => num.slice(0, -1) || "0");
  } else if (value === "=") {
    try {
      setNum(() => eval(num)); // calculate result
    } catch (error) {
      setNum("Error"); // handle invalid expressions
    }
  } else {
    setNum(() => (num !== "0" ? num + value : value));
  }
};

    return (
        <div className="container">
            <div className="row justify-content-center min-vh-100">
                <div className="col-md-6 my-auto text-white">
                    <h1>This is my calculator</h1>
                    <span className="block text-sm fs-6 text-gray-300">
                        Simple and fast calculations to save your time, perform accurate results instantly, and provide a smooth user experience.
                    </span>
                </div>
                <div className="calculator col-md-4 col-10 rounded-4 my-auto">
                    <div className="container-fluid">
                        <div className="row justify-content-center g-4 h-100">
                            <div className="col-12 pt-4 mt-0 mb-3">
                                <form>
                                    <div class="form-group px-0">
                                        <label for="output"></label>
                                        <input type="text"
                                            class="form-control fs-1 output-box text-end" name="output" id="output" aria-describedby="helpId" value={num} readOnly/>
                                    </div>
                                </form>
                            </div>
                            {
                                buttons.map((value, index) => {
                                    return (
                                        <div className="col-3 rounded-3" key={index}>
                                            <button className="calc-button rounded-2 fs-6 p-2 fw-medium w-100"
                                                onClick={() => onHandler(value)}><span>{value}</span></button>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-3 rounded-3">
                                <button className="calc-button equal rounded-2 p-2 fs-6 fw-medium w-100"onClick={() => onHandler("=")} ><span>=</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calculator;