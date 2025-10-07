import { useState } from "react";

const buttons = [
    "AC", "C", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+", "0", "00", "."
];

function Calculator() {
    const [num, setNum] = useState("0");
    const [calculation, setCalculation] = useState("");
    const onHandler = (value) => {
        if (value === "AC") {
            setNum("0");
            setCalculation("");
        } else if (value === "C") {
            if (calculation !== "") {
                setCalculation("");
                setNum("0");
            } else {
                setNum(() => num.slice(0, -1) || "0");
            }
        } else if (value === "=") {
            try {
                setNum(eval(num).toString()); // calculate result
                setCalculation(num)
            } catch (error) {
                setNum("Error"); // handle invalid expressions
            }
        } else if ((value === "0" || value === "00" || ["+", "%", "/", "*", "-"].includes(value)) && (num === "0" || /[+\-*./]$/.test(num))) {
            return;
        } else {
            setNum((num === "0" || num === "Error") ? value : num + value);
        }
    };

    return (
        <div className="container mb-3">
            <div className="row justify-content-center min-vh-100">
                <div className="col-md-6 col-10 p-md-0 pe-md-3 p-3 my-md-auto text-white">
                    <h1>Simple Calculator</h1>
                    <span className="block text-sm fs-6 text-gray-300">
                        Simple and fast calculations to save your time, perform accurate results instantly, and provide a smooth user experience.
                    </span>
                </div>
                <div className="calculator col-md-4 col-10 rounded-4 my-auto h-auto pb-4">
                    <div className="container-fluid">
                        <div className="row justify-content-center g-4">
                            <div className="col-12 pt-4 mt-0 mb-3">
                                <form>
                                    <div class="form-group px-0 position-relative">
                                        <label for="output"></label>
                                        <input type="text"
                                            class="form-control fs-1 output-box text-end" name="output" id="output" aria-describedby="helpId" value={num} readOnly />
                                        <small id="helpId" class="fw-medium text-muted position-absolute end-0 me-3 calculation">{calculation}</small>
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
                                <button className="calc-button equal rounded-2 p-2 fs-6 fw-medium w-100" onClick={() => onHandler("=")} ><span>=</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calculator;