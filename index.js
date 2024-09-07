const allButton = document.querySelectorAll(".numeric-area>button")
const input = document.getElementsByTagName('input')[0]

console.log(input)
let calculationString = []

for (let i = 0; i <= allButton.length; i++) {
    let result = 0;
    allButton[i].addEventListener('click', () => {
        let values = allButton[i].textContent
        if (values !== "=" && values !== "DEL") {
            calculationString.push(values)
            if(calculationString[0]==="*" || calculationString[0]==="/" || calculationString[0]==="+" ){
                alert("Invalid Expression!")
                calculationString.pop()
            }
            for(let j=0;j<calculationString.length;j++){
                if(calculationString.length<=1){
                    break;
                }
                else{
                    if((calculationString[j-1]==="*" || calculationString[j-1]==="/" || calculationString[j-1]==="+" || calculationString[j-1]==="-" || calculationString[j-1]==="." ) && (calculationString[j]==="*" || calculationString[j]==="/" || calculationString[j]==="+" || calculationString[j]==="-" )){
                        alert("Inavlid expression!")
                        calculationString.pop()
                    }
                    if(calculationString[j-1]==="." && calculationString[j]==="."){
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
            else {
                result = eval(input.value)
                input.value = result
                calculationString=[]
                calculationString.push(result)
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
        console.log("input.value", input.value);
        console.log("calculationString", calculationString);
    })
}