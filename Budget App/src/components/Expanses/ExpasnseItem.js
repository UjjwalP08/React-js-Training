import React, { useState } from "react";
import Card from "../UI/Card";
import ExpanseDate from "../Expanses/ExpanseDate";

// CSS File
import "./ExpasnseItem.css";

const ExpasnseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    // clickHandler event-handler
    const clickHandler = () => {
        setTitle("Updated")
        console.log(title)
    }

    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price"> Rs.{props.price}</div>
            </div>
            <button onClick={clickHandler}>Click Here</button>
        </Card>
    );
}

export default ExpasnseItem;
