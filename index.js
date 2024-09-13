const allButton = document.querySelectorAll(".numeric-area>button")
const input = document.getElementsByTagName('input')[0]

let calculationString = []

for (let i = 0; i <= allButton.length; i++) {
    let result = 0;
    allButton[i].addEventListener('click', () => {
        let values = allButton[i].textContent
        if (values !== "=" && values !== "DEL") {
            calculationString.push(values)
            if (calculationString[0] === "*" || calculationString[0] === "/" || calculationString[0] === "+") {
                alert("Invalid Expression!")
                calculationString.pop()
            }
            for (let j = 0; j < calculationString.length; j++) {
                if (calculationString.length <= 1) {
                    break;
                }
                else {
                    if ((calculationString[j-1] === "*" || calculationString[j-1] === "/" || calculationString[j - 1] === "+" || calculationString[j - 1] === "-") && (calculationString[j] === "*" || calculationString[j] === "/" || calculationString[j] === "+" || calculationString[j] === "-")) {
                        alert("Inavlid expression!")
                        calculationString.pop()
                    }
                    if (calculationString[j - 1] === "." && calculationString[j] === ".") {
                        alert("Inavlid expression!")
                        calculationString.pop()
                    }
                }
            }
            
            input.value = calculationString.join("")
        }
        if (values === "=") {
            if (calculationString.length === 0) {
                alert("Enter expression!")
                return
            }
            else if (values === "=" && (calculationString[calculationString.length-1]==="*" || calculationString[calculationString.length-1]==="+" || calculationString[calculationString.length-1]==="-" || calculationString[calculationString.length-1]==="/")) {
                alert("Invalid expression!")
                return
            }
            else {
                // try{
                    result = eval(input.value)  
                // }
                // catch(error){
                //     alert("Invalid expression")
                // }

                console.log(eval);

                if(result%1===0){
                    input.value = result
                }
                if(result%1!==0){
                    input.value = result.toFixed(3)
                }
                calculationString = []
                calculationString.push(input.value)
            }

        }

        if (values === "RESET") {
            input.value = 0
            calculationString = []
        }
        if (values === "DEL") {
            calculationString.pop()
            input.value = calculationString.join("")
        }
    })
}