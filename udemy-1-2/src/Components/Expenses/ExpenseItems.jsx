import React, {useState} from 'react';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItems = (props) => {
    const [title, setTitle] = useState(props.title)

    // let title = props.title

    const handleTitle = () => {
        setTitle('Changes!')
    }
    return (
        <Card
            className={"text-white font-bold text-xl flex justify-between rounded-2xl bg-black/20 px-2 py-6 items-center my-6"}>
            <div className={"flex justify-between px-4"}>
                <ExpenseDate date={props.date}/>
                <h2 className={"px-4"}>{title}</h2>
            </div>
            <div className={"p-4 bg-orange-950 rounded-2xl "}>$ {props.amount}</div>
            <button onClick={handleTitle}>Change Title</button>
        </Card>
    );
};

export default ExpenseItems;