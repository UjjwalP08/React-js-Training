import { useState } from "react";
const useInput = (validateFun) =>{
  const [useInput, setUseInput] = useState("");
  const [isTouch, setIsTouch] = useState(false);

  const inputValid = validateFun(useInput);

  const isInputValid = !inputValid && isTouch;

  const inputHandler = (e)=>{
    setUseInput(e.target.value);
  }

  const blurHandler = (e)=>{
    setIsTouch(true);
  }

  const resetInput = () =>{
    setUseInput('');
    setIsTouch(false);
  }

  return {
    useInput,
    inputValid,
    isInputValid,
    inputHandler,
    blurHandler,
    resetInput,
  }
  

};

export default useInput;