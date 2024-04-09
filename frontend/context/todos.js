import React, { createContext } from "react";

const dataToProvide = {
    favoriteBand: 'Iron Maiden'
}

export const TodosContext = createContext();

export function TodosProvider(props) {
    return (
        <TodosContext.Provider value={dataToProvide}>
            {props.childern}
        </TodosContext.Provider>
    )
}