import { calculatorResultCurrent } from "../App"

const typeNumber = value => {
    let currentValueContainer = document.querySelector(`.${calculatorResultCurrent}`)

    const context = {
        'ceroAtBeginning': value === 0 && currentValueContainer.textContent === '0',
        'dotAtBeginning': value === '.' && currentValueContainer.textContent === '',
        'dotAlreadyTyped': value === '.' && currentValueContainer.textContent.includes('.')
    }
    
    if (context.ceroAtBeginning) return currentValueContainer.textContent = '0'
    else if (context.dotAtBeginning) return currentValueContainer.textContent = '0.'
    else if (context.dotAlreadyTyped) return null
    currentValueContainer.textContent += value
}

export const Number = ( {value, name} )=>{
    return (
    <button className={name} onClick={ ()=> typeNumber(value) }>
        {value}
    </button>
    ) 
}