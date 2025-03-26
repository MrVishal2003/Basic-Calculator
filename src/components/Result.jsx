import { calculatorResultPrevious, calculatorResultCurrent } from "../App"

const doCalculus = (firstValue, secondValue, operation, previousValueContainer, currentValueContainer) =>{
    let context = {
        'divideByZero': secondValue === 0 && operation === '/',
        'noValuesWritten': previousValueContainer.textContent === '' && currentValueContainer.textContent === ''
    }
    if (context.divideByZero) return 'Cannot divide by 0'
    else if (context.noValuesWritten) return null
    switch (operation){
        case '+': return firstValue + secondValue
        case '-': return firstValue - secondValue
        case 'x': return firstValue * secondValue
        case '/': return firstValue / secondValue
    }
}
const result = ()=>{
    let previousValueContainer = document.querySelector(`.${calculatorResultPrevious}`)
    let currentValueContainer = document.querySelector(`.${calculatorResultCurrent}`)
    let context = {
        'oneValueResultBug': previousValueContainer.textContent === '' && currentValueContainer.textContent !== '',
        'calculusAlreadyDone': 
            previousValueContainer.textContent.split(' ').length === 3 &&
            previousValueContainer.textContent.split(' ')[2] !== '' &&
            currentValueContainer.textContent !== '',
        'secondValueResultDot': currentValueContainer.textContent === '0.'
    }
    if (context.oneValueResultBug || context.calculusAlreadyDone || context.secondValueResultDot) return null
    else {
        previousValueContainer.textContent += currentValueContainer.textContent
        currentValueContainer.textContent = ''
        
        let valuesToCalculate = previousValueContainer.textContent.split(' ')
        for (let i = 0; i < valuesToCalculate.length; i++){
            if (i % 2 !== 0) continue
            let parsedNumber = parseFloat(valuesToCalculate[i])
            valuesToCalculate[i] = parsedNumber
        }
        
        let firstValue = valuesToCalculate[0]
        let secondValue = valuesToCalculate[2]
        let operator = valuesToCalculate[1]
        let calculatedValue = doCalculus(firstValue, secondValue, operator, previousValueContainer, currentValueContainer)
        
        for (let i = 0; i < 3; i++){ valuesToCalculate.shift() }
        valuesToCalculate.unshift(calculatedValue)
        
        currentValueContainer.textContent = valuesToCalculate[0]
    }
}

export const Result = ( {name} )=>{
    return (
    <button className={name} onClick={ ()=> result() }></button>
    )
}