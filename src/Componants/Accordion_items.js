import React, {useState} from 'react';
import './Accordion_items.css';

let Accordion_items = (props) => {

    const [show, setShow] = useState(false)

    let showData = () => {
        if (show == false){
            setShow(true);
        }
        else{
            setShow(false);
        }    
    }

    return (
      <>
            <div className='main_heading'>
                <span className='plus' onClick = {showData}>{ show ? '➖' : '➕'  }</span> 
                <h5 className='questions'>{props.question} </h5>   
            </div>    
            { show && <p className='answers'>{props.answer}</p> }
      </>
    )
}

export default Accordion_items;