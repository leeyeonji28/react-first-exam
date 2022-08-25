import { useState } from "react"

const Counter = ({counter, setCounter}) => {
    // const [counter, setCounter] = useState(0);
    return (<div>
        <h3>Total clicks : {counter}</h3>
        <button
            onClick={() => {
                setCounter(counter + 1);
            }}
            className="btn btn-outline btn-success"
        >Click me :)</button>
    </div>)
}

export default Counter;