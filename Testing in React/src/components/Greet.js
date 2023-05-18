import { useState } from "react";
import Outuput from "./Outuput";
const Greet = ()=>{

    const [text, setText] = useState(false)

    const changeButtonHandler = ()=>{
        setText(true)

    }

    return(
        <>
            <p>Greet Page</p>
            {!text && <Outuput>Nothing changed</Outuput>}
            {text && <Outuput>Changed!!!</Outuput>}
            <button onClick={changeButtonHandler} >Change Text!!!</button>
        </>
    )
};  

export default Greet; 