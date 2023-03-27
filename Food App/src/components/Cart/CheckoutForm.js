import classes from "./CheckoutForm.module.css";
import { useRef, useState } from "react";

const isEmpty = (value) => {
  return( value.trim() !== "");
};
const hasSixLetters = (value) => {
  return (value.trim().length === 6);
};

// get props through Cart.js
const CheckoutForm = (props) => {
  const nameRef = useRef();
  const addressRef = useRef();
  const postalRef = useRef();
  const cityRef = useRef();

  const [isFormValid, setIsFormValid] = useState({
    name: true,
    address: true,
    postal: true,
    city: true,
  });

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredName = nameRef.current.value;
    const enteredAddress = addressRef.current.value;
    const enteredPostal = postalRef.current.value;
    const enteredCity = cityRef.current.value;

    const isNameValid = isEmpty(enteredName);
    const isAdressValid = isEmpty(enteredAddress);
    const isPostalValid = hasSixLetters(enteredPostal);
    const isCityValid = isEmpty(enteredCity);

    setIsFormValid({
      name: isNameValid,
      address: isAdressValid,
      postal: isPostalValid,
      city: isCityValid,
    });

    const formValid =
      isNameValid && isAdressValid && isPostalValid && isCityValid;

    if (!formValid) {
      // form not valid
    //   console.log('form is not valid');
      return;
    }
    // form valid  and submit data to serever
    // passing to parent comp Cart.js file
    props.onAddDetails({
        name:enteredName,
        address:enteredAddress,
        postal:enteredPostal,
        city:enteredCity
    })
  };

  const nameClass = `${classes.control} ${
    isFormValid.name ? "" : classes.invalid
  }`;
  const addressClass = `${classes.control} ${
    isFormValid.address ? "" : classes.invalid
  }`;
  const postalClass = `${classes.control} ${
    isFormValid.postal ? "" : classes.invalid
  }`;
  const cityClass = `${classes.control} ${
    isFormValid.city ? "" : classes.invalid
  }`;

  return (
    <form className={nameClass} onSubmit={submitHandler}>
      <div className={classes.control} onSubmit={submitHandler}>
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" ref={nameRef} />
        {!isFormValid.name && <p className={classes.error}>Please Enter Valid Name</p>}
      </div>
      <div className={addressClass}>
        <label htmlFor="street">Your Address:</label>
        <input type="text" id="street" ref={addressRef} />
        {!isFormValid.address && <p className={classes.error}>Please Enter Valid Address</p>}
      </div>
      <div className={postalClass}>
        <label htmlFor="postal">Postal Code:</label>
        <input type="text" id="postal" ref={postalRef} />
        {!isFormValid.postal && <p className={classes.error}>Postal Code Exact Six Digit</p>}
      </div>
      <div className={cityClass}>
        <label htmlFor="city">City:</label>
        <input type="text" id="city" ref={cityRef} />
        {!isFormValid.city && <p className={classes.error}>Please Enter Valid City</p>}
      </div>
      <div className={classes.actions}>
        <button className={classes.submit}>Confirm</button>
        <button type="button" onClick={props.onHide}>
          Cancle
        </button>
      </div>
      {/* we use here type it indicate that only confirm button is allowed to submit form */}
    </form>
  );
};

export default CheckoutForm;
