import React from 'react';
import ExpenseItems from "./ExpenseItems";
import Card from "../UI/Card";

const Expenses = (props) => {
    const expenses = [
        {
            title: "Car insurance",
            id: "e1",
            amount: Math.floor(Math.random() * 100),
            date: new Date(2022, 2, 22)
        },
        {
            title: "Paper",
            id: "e2",
            amount: Math.floor(Math.random() * 100),
            date: new Date(2022, 2, 22)
        },
        {
            title: "Cup",
            id: "e3",
            amount: Math.floor(Math.random() * 100),
            date: new Date(2022, 2, 22)
        },
        {
            title: "Notebook",
            id: "e4",
            amount: Math.floor(Math.random() * 100),
            date: new Date(2022, 2, 22)
        },
    ]
    return (
        <Card>
            <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
            <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
            <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
            <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
        </Card>
    );
};

export default Expenses;