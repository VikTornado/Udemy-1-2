import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = () => {
    return (
        <div className={"w-full h-screen bg-black/60 p-4"}>
            <NewExpense/>
            <Expenses />
        </div>
    )
        ;
}

export default App;
