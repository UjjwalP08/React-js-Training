import React from "react";
import Card from "../UI/Card";
import ExpanseDate from "../Expanses/ExpanseDate";

// CSS File
import "./ExpasnseItem.css";

const ExpasnseItem = (props) => {


    return (
        <Card className="expense-item">
            <ExpanseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.heading}</h2>
                <div className="expense-item__price"> Rs.{props.price}</div>
            </div>
        </Card>
    );
}

export default ExpasnseItem;
