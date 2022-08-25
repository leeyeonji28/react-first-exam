const Convert = ({counter, setCounter}) => {
    return <div><div>{counter % 2 == 0 ? "짝수" : "홀수"}</div><button onClick={() => { setCounter(counter + 1)}}></button></div>
}

export default Convert;