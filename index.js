const CalcInput = document.querySelector("input[type=text]") ,
    numberBtn = document.querySelectorAll(".Calculate-btns button");


const CalcEvent = {
    removeAll: "CE",
    remove: "delete",
    equal: "equal"
}



numberBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const ElementValue = event.target.value;

        if (!isNaN(ElementValue)) {
            if (CalcInput.value == 0) {
                CalcInput.value = ElementValue
            } else {
                CalcInput.value += ElementValue
            }
        } else {
            switch (ElementValue.toLowerCase()) {
                case CalcEvent.equal.toLowerCase():
                    let result = eval(CalcInput.value) || 0;

                    CalcInput.value = result;
                    break;
                case CalcEvent.remove.toLowerCase():
                    // Add the value of the button to the input. 
                    // If there is no value, set it to 0.
                    CalcInput.value = CalcInput.value.substring(0, CalcInput.value.length - 1) || 0
                    break;
                case CalcEvent.removeAll.toLowerCase():
                    CalcInput.value = 0
                    break;
                default:
                    // if input is zero change to new value
                    // else add value to input
                    if (CalcInput.value == 0) {
                        // these symbols should not be at the start
                        let notInStart = ["/", "*"]
                        if (!notInStart.includes(ElementValue)) {
                            CalcInput.value = ElementValue
                        }
                    } else {
                        CalcInput.value += ElementValue
                    }
            }
        }
    })
})



