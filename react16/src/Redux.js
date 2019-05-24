import React, { useState } from 'react'

function useReducer (reducer, initialState) {
    const [state, setState] = useState(initialState);

    function dispatch (action) {
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}


function counter (state = 0, action) {
    switch (action.type) {
        case 'add':
            return state + 1
        case 'minus':
            return state - 1
        default:
            return state
    }
}



function Todos () {
    const [count, dispatch] = useReducer(counter, 1);
    console.log('count ', count)
    function handleAddClick (text) {
        dispatch({ type: 'add', });
    }
    function handleMinusClick (text) {
        dispatch({ type: 'minus', });
    }

    return (<div>
        <div onClick={handleAddClick}>
            add
    </div>
        <div onClick={handleMinusClick}>
            del
    </div>
        <div>{count}</div>
    </div>
    )
}


export default Todos