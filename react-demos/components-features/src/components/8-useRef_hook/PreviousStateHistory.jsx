import { useState, useEffect, useRef } from "react";

export default function PreviousStateHistory() {
    const [count, setCount] = useState(0);
    const previousCountRef = useRef([ count ]); // Store previous count in a ref

    useEffect(() => {
        if (previousCountRef.current.at(-1) !== count) {
            console.log('Count changed:', count, '(Previous:', previousCountRef.current, ')');
            previousCountRef.current.push(count); // Update the ref
        }
    }, [count]); // Run the effect only when count changes

    return (
        <section>
            <h2 className="display-3">Implement <span className="fw-bold">state history</span></h2>
            <hr className="w-50"/>
            <p className="display-5 text-truncate">Previous: {JSON.stringify(previousCountRef.current)}</p>
            <p className="display-1">Count: {count}</p>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        </section>
    )
}