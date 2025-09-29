function Calculator() {
    return (
        <div className="container">
            <div className="row justify-content-center min-vh-100">
                <div className="calculator col-md-4 rounded-4 my-auto">
                    <div className="container-fluid">
                        <div className="row justify-content-center g-4 h-100">
                            <div className="col-12 pt-4 mt-0">
                                <form>
                                    <div class="form-group px-0">
                                        <label for="output"></label>
                                        <input type="text"
                                            class="form-control fs-1 output-box text-end" name="output" id="" aria-describedby="helpId" placeholder="" />
                                    </div>
                                </form>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>C</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>CE</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>/</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>*</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>7</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>8</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>9</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>-</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>4</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>5</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>6</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>+</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>1</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>2</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>3</span></button>
                            </div>
                            <div className="col-3 rounded-3">
                                <button className="calc-button rounded-2 fs-6 p-3 fw-medium w-100"><span>=</span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Calculator;