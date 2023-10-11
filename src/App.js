import React from 'react'
import './App.css';
import Accordion_items from './Componants/Accordion_items'
import questions from './Api/Api';

let App = () => {
  return (
    <>
      
        <div className='question_box shadow p-3 mb-5 bg-body rounded'>
          <h3 className='top_heading'>Accordion App</h3>

        {
          questions.map((values) => {
              return  <Accordion_items question = {values.question} answer = {values.answer} key = {values.id}/>
          })          

        }
        
        </div>
  
    </>
  )
};

export default App;
