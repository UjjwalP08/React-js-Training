import classes from './Input.module.css'

// this file accept all the props that passes from MealItemForm.js file

const Input = (props)=>{
return(
<div className={classes.input}>
    {/* here props.input is an object that contain all the value req for input field */}
    <label htmlFor={props.input.id}>{props.label}</label>
    <input {...props.input} />
</div>);
};

export default Input;