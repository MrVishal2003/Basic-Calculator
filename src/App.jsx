import './App.css'
import { Number } from './components/Number'
import { Operator } from './components/Operator'
import { Delete, Clean } from './components/Eraser'
import { Result } from './components/Result'

export const calculatorResultCurrent = 'calculator__result__current'
export const calculatorResultPrevious = 'calculator__result__previous'

function App() {
  return (
    <>
    <main className='calculator'>
      <div className='calculator__container'>
        <section className='calculator__result'>
          <div className={calculatorResultPrevious}></div>
          <div className={calculatorResultCurrent}></div>
        </section>
        <section className='calculator__content'>
          <Number value={7} name={'calculator__content__button'}/>
          <Number value={8} name={'calculator__content__button'}/>
          <Number value={9} name={'calculator__content__button'}/>
          <Delete icon={'DEL'} name={'calculator__content__button calculator__content__button--del-ac'}/>
          <Clean icon={'AC'} name={'calculator__content__button calculator__content__button--del-ac'}/>

          <Number value={4} name={'calculator__content__button'}/>
          <Number value={5} name={'calculator__content__button'}/>
          <Number value={6} name={'calculator__content__button'}/>
          <Operator operation={'x'} name={'calculator__content__button calculator__content__button--operator calculator__content__button--multiply'}/>
          <Operator operation={'/'} name={'calculator__content__button calculator__content__button--operator calculator__content__button--divide'}/>

          <Number value={1} name={'calculator__content__button'}/>
          <Number value={2} name={'calculator__content__button'}/>
          <Number value={3} name={'calculator__content__button'}/>
          <Operator operation={'+'} name={'calculator__content__button calculator__content__button--operator calculator__content__button--sum'}/>
          <Operator operation={'-'} name={'calculator__content__button calculator__content__button--operator calculator__content__button--subtract'}/>
          
          <Number value={0} name={'calculator__content__button calculator__content__button--span_2'}/>
          <Number value={'.'} name={'calculator__content__button'}/>
          <Result icon={'='} name={'calculator__content__button calculator__content__button--span_2 calculator__content__button--equal'}/>
        </section>
      </div>
    </main>
    </>
  )
}

export default App
