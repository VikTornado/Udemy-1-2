import React from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

const App = (props) => {

    const addExpenseHandler = (expense) => {
        console.log("jgjgk")
        console.log(expense)
    }

    return (
        <div className={"w-full h-screen bg-black/60 p-4"}>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses />
        </div>
    )
        ;
}

export default App;
