import useInput from "../hooks/use-input";

const BasicForm = (props) => {

  const isNotEmpty = (value) => value.trim() !== "";
  const emailVal = (value) => value.includes('@');

  // First Name Validation
  const {
    useInput: firstName,
    inputValid: isFnameValid,
    isInputValid: fnameValidation,
    inputHandler: firstNameHandler,
    blurHandler: firstNameBlurHandler,
    resetInput: firstNameReset,
  } = useInput(isNotEmpty);

  // Last Name  Validation
  const {
    useInput: lastName,
    inputValid: isLnameValid,
    isInputValid: lnameValidation,
    inputHandler: lastNameHandler,
    blurHandler: lastNameBlurHandler,
    resetInput: lastNameReset,
  } = useInput(isNotEmpty);

  const {useInput: userEmail,
    inputValid: isEmailValid,
    isInputValid: emailValidation,
    inputHandler: emailHandler,
    blurHandler: emailBlurHandler,
    resetInput: emailReset,} = useInput(isNotEmpty && emailVal);

  // Check if form is valid or not
  let isFormValid = false;

  if (isFnameValid && isLnameValid && isEmailValid) {
    isFormValid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
    firstNameReset();
    lastNameReset();
    emailReset();
  };

  const fnameClass = fnameValidation ? "form-control invalid" : "form-control";
  const lnameClass = lnameValidation ? "form-control invalid" : "form-control";
  const emailClass = emailValidation ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={fnameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstNameHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {fnameValidation && (
            <p className="error-text">First Name Requrired</p>
          )}
        </div>
        <div className={lnameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastName}
            onChange={lastNameHandler}
            onBlur={lastNameBlurHandler}
          />
          {lnameValidation && <p className="error-text">Last Name Requrired</p>}
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" value={userEmail} onChange={emailHandler} onBlur={emailBlurHandler} />
        {emailValidation && <p className="error-text">Email Requrired</p>}

      </div>
      <div className="form-actions">
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
