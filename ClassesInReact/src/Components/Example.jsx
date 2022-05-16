import { useState, useEffect } from "react"; 

export const Example= () => {
    const [count, setCount] = useState(0); 

    useEffect(() => {
        document.title=`clicked ${count} times`
    })
    const handleClick = () => {
        setCount(count + 1); 
    }
    return <div>
        <p> You clicked ${count} times</p>
        <button onClick={handleClick}> ClickMe</button>
    </div>
}