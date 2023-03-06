import React from 'react'
import ExpanseForm from './ExpanseForm';

import './NewExpanse.css'

function NewExpanse(props) {
    const SaveExpanseData = (getData)=>{
        const expanseData = {
            ...getData,
            id:Math.random().toString()
        };

        // console.log(expanseData);
        props.onexpanseHandler(expanseData);
    }
  return (
    <div className='new-expense'>
        <ExpanseForm onSaveExpanseData={SaveExpanseData} />
    </div>
  )
}

export default NewExpanse;