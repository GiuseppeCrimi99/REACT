import useCounter from "./UseCounter";

const Counter=({initialValue=0})=>{
    const{count, onIncrement,onDecrement,onReset}=useCounter(initialValue)

    return(
        <>
            <h2>Counter:{count}</h2>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <button onClick={onReset}>Reset</button>
        </>
    )
}


export default Counter