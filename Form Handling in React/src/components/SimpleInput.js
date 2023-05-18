import useInput from "../hooks/use-input";
const SimpleInput = (props) => {
  // userName field
  const {
    useInput: userName,
    inputValid: isNameValid,
    isInputValid: nameValidation,
    inputHandler: nameHandler,
    blurHandler: nameBlurHandler,
    resetInput: resetUserName,
  } = useInput((value) => value.trim() !== "");

  // userEmail Field
  const {
    useInput: userEmail,
    inputValid: isEmailValid,
    isInputValid: emailValidation,
    inputHandler: emailHandler,
    blurHandler: emailBlurHandler,
    resetInput: resetEmail,
  } = useInput((value) => value.includes("@") && value.trim !== "");

  let formvalid = false;

  if (isNameValid && isEmailValid) {
    formvalid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    resetUserName();
    resetEmail();
  };

  const nameCont = nameValidation ? "form-control invalid" : "form-control";
  const emailCont = emailValidation ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameCont}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={nameBlurHandler}
          value={userName}
        />
        {nameValidation ? <p className="error-text">Name Requrired</p> : ""}
      </div>
      <div className={emailCont}>
        <label htmlFor="mail"> Your Email </label>
        <input
          type="email"
          id="mail"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={userEmail}
        />
        {emailValidation ? <p className="error-text">Email Requrired</p> : ""}
      </div>
      <div className="form-actions">
        <button disabled={!formvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
