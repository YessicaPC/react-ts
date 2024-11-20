import { useState } from "react";
import { useCounter } from "../hooks/useCounter";

const Counter = () => {
    const { count, increaseBy } = useCounter()


    return (
        <>
            <h3 className="text-2xl"> Contador <small className="font-bold">{count} </small></h3>
            <div>
                <button
                    onClick={() => increaseBy(+1)}
                    className="p-2 text-cyan-400 bg-purple-400 rounded-xl mx-2 w-10 hover:bg-purple-900"> +1 </button>
                <button
                    onClick={() => increaseBy(-1)}
                    className="p-2 bg-cyan-400 text-purple-400 rounded-xl mx-2 w-10 hover:bg-purple-900"> -1 </button>
            </div>
        </>
    )
}

export default Counter
