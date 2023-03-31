import { useState } from "react";
const Greet = ()=>{

    const [text, setText] = useState(false)

    const changeButtonHandler = ()=>{
        setText(true)

    }

    return(
        <>
            <p>Greet Page</p>
            {!text && <p>Nothing changed</p>}
            {text && <p>Changed!!!</p>}
            <button onClick={changeButtonHandler} >Change Text!!!</button>
        </>
    )
};  

export default Greet; 