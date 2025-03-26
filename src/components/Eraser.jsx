import { calculatorResultPrevious, calculatorResultCurrent } from "../App"

const deleteValue = ()=> {
    let previousValueContainer = document.querySelector(`.${calculatorResultPrevious}`)
    let currentValueContainer = document.querySelector(`.${calculatorResultCurrent}`)
    let calculusAlreadyDone =
            previousValueContainer.textContent.split(' ').length === 3 &&
            previousValueContainer.textContent.split(' ')[2] !== '' &&
            currentValueContainer.textContent !== ''
    if (!calculusAlreadyDone) {
        let array = currentValueContainer.textContent.split('')
        array.pop()
        let newCurrentValue = ``
        array.forEach(e => newCurrentValue += e)
        currentValueContainer.textContent = newCurrentValue
    }
}
const clear = ()=> {
    let previousValueContainer = document.querySelector(`.${calculatorResultPrevious}`)
    let currentValueContainer = document.querySelector(`.${calculatorResultCurrent}`)
    previousValueContainer.textContent = ''
    currentValueContainer.textContent = ''
}

export const Delete = ( {icon, name} )=>{
    return(
    <button className={name} onClick={ ()=> deleteValue() }>
        {icon}
    </button>
    )
}
export const Clean = ( {icon, name} )=>{
    return(
    <button className={name} onClick={ ()=> clear() }>
        {icon}
    </button>
    )
}