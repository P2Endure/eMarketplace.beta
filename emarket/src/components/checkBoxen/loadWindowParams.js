import React from "react";
import bgtecSunCool from '../../testData/productData/BgtecSunCool';
import {Form} from 'react-bootstrap';
import './style/style.css';

function WindowParams (props){

    const handleWindowInput = () =>{
        const opts = {
        method: 'POST',
        body: JSON.stringify(bgtecSunCool),
        headers: {
            'Content-Type': 'application/json',
          },
        }
        console.log(opts)
        fetch('http://localhost:4000/replace-with-text', opts)
        .then(res => res.json())
        .then(res => console.log(res));
      }; 
      
return(
    <Form>
        <div className="cards"> 
            <input className="form-check-input" type="checkbox" id="gridCheck1" onChange={(handleWindowInput)}/>
                <label className="form-check-label" htmlFor="gridCheck1">
                    <p className='card-text text-secondary'>Add to energy file</p>
                </label>
        </div>
    </Form>
    )
}

export default WindowParams
