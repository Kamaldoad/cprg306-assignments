"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    };
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={increment} 
        className= "p-2 m-2 w-40 bg-blue-500 hover:bg-blue-700 active:bg-red-50"
        >Increment
        </button>
        </div>
    );
    }