import { calculatorResultPrevious, calculatorResultCurrent } from "../App"

const prepareCalculus = operation => {
    let previousValueContainer = document.querySelector(`.${calculatorResultPrevious}`)
    let currentValueContainer = document.querySelector(`.${calculatorResultCurrent}`)
    const context = {
        'hasNoValue': currentValueContainer.textContent === '',
        'ceroAndDotAtBeginning': currentValueContainer.textContent === '0.'
    }

    if (context.hasNoValue || context.ceroAndDotAtBeginning) return null
    previousValueContainer.textContent = `${currentValueContainer.textContent} ${operation} `
    currentValueContainer.textContent = ``
}

export const Operator = ( {operation, name} )=>{
    return (
    <button className={name} onClick={ ()=> prepareCalculus(operation) }></button>
    )
}