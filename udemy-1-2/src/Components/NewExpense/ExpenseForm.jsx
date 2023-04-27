import React, {useState} from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("")
    const [enteredAmount, setEnteredAmount] = useState("")
    const [enteredDate, setEnteredDate] = useState("")

    const titleOnChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),

        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle("")
        setEnteredAmount("")
        setEnteredDate("")
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <div className={""}>
                <div className={"p-2"}>
                    <label htmlFor="">Title</label>
                    <input
                        onChange={titleOnChangeHandler}
                        value={enteredTitle}
                        type="text"/>
                </div>
                <div className={"p-2"}>
                    <label htmlFor="">Amount</label>
                    <input
                        onChange={amountChangeHandler}
                        type="number"
                        value={enteredAmount}
                    />
                </div>
                <div className={"p-2"}>
                    <label htmlFor="">Date</label>
                    <input
                        onChange={dateChangeHandler}
                        type="date"
                        min={"2019-01-01"}
                        max={"2025-01-01"}
                        value={enteredDate}
                    />
                </div>
            </div>
            <div>
                <button type={"submit"}>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;