import { useState } from "react";
import audio from "./assets/click.mp3";

const buttons = [
    "AC", "bi bi-backspace", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+", "0", "00", "."
];

function Calculator() {
    const [num, setNum] = useState("0");
    const [calculation, setCalculation] = useState("");
    const [turned, setTurned] = useState(false);

    const onHandler = (value) => {
        const click = new Audio(audio);
        click.play().catch(() => { });
        if (value === "AC") {
            setNum("0");
            setCalculation("");
        } else if (value === "bi bi-backspace") {
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
        } else if ((value === "0" || value === "00" || ["+", "%", "/", "*", "-"].includes(value)) && (num === "0" || /[+\-*/]$/.test(num))) {
            return;
        } else {
            setNum((num === "0" || num === "Error") ? value : num + value);
            if (calculation !== "") {
                setCalculation("");
            }
        }
    };

    const turnCalc = () => {
        setTurned(!turned);
    }

    return (
        <div className="container">
            <div className="row justify-content-center min-vh-100">
                <div className="col-md-6 col-11 p-md-0 pe-md-5 p-3 my-md-auto mt-4 text-white">
                    <h1 className="fw-bold mb-3">Simple Calculator</h1>
                    <p className="block text-sm fs-6 text-gray-300">
                        Perform all your calculations with ease! <br />
                        Whether you need to add, subtract, multiply, or divide, this calculator handles it all effortlessly.
                    </p>
                    <button className="btn btn-sm px-4 rounded-5 bg-white text-secondary fw-medium" onClick={turnCalc}>View developer</button>
                </div>
                <div className={"calculator col-md-4 col-11 rounded-4 my-md-auto pb-4 position-relative" + (turned ? " turned" : "")}>
                    <div className="container-fluid frontside">
                        <div className="row justify-content-center g-4">
                            <div className="col-12 pt-4 mt-0 mb-3">
                                <form>
                                    <div className="form-group px-0 position-relative">
                                        <label htmlFor="output"></label>
                                        <input type="text"
                                            className="form-control fs-1 output-box text-end" name="output" id="output" aria-describedby="helpId" value={num} readOnly />
                                        <small id="helpId" className="fw-medium text-muted position-absolute end-0 me-3 calculation">{calculation}</small>
                                    </div>
                                </form>
                            </div>
                            {
                                buttons.map((value, index) => {
                                    return (
                                        <div className="col-3 rounded-3" key={index}>
                                            <button className="calc-button rounded-2 fs-6 p-2 fw-medium w-100"
                                                onClick={() => onHandler(value)}>{index === 1 ? <span><i className={value}></i></span> : <span>{value}</span>}</button>
                                        </div>
                                    )
                                })
                            }
                            <div className="col-3 rounded-3">
                                <button className="calc-button equal rounded-2 p-2 fs-6 fw-medium w-100" onClick={() => onHandler("=")} ><span>=</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="backside position-absolute rounded-4">
                        <div className="cover mx-auto p-3">
                            <h6 className="text-center stroked-text">Project-1</h6>
                            <p className="text-center stroked-text">Developed by Gurunathan
                            </p>
                        </div>
                        <div className="screw one"></div>
                        <div className="screw two"></div>
                        <div className="screw three"></div>
                        <div className="screw four"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calculator;