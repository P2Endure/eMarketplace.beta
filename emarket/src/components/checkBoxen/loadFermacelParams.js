import React from 'react';
import fermacel from '../../testData/productData/Fermacell';
import {Form} from 'react-bootstrap';
import './style/style.css';

function FermacelParams (props){
    const handlePanelInput = () =>{
        const opts = {
        method: 'POST',
        body: JSON.stringify(fermacel),
        headers: {
            'Content-Type': 'application/json',
          },
        }
        console.log(opts)
        fetch('http://localhost:4000/replace-with-text-panel', opts)
        .then(res => res.json())
        .then(res => console.log(res));
      };
return(
    <Form>
        <div className="cards">
            <input className="form-check-input" type="checkbox" id="gridCheck1" onChange={(handlePanelInput)}/>
                <label className="form-check-label" htmlFor="gridCheck1">
                    <p className='card-text text-secondary'>Add to energy file</p>
                </label>
        </div>
    </Form>    
    )
}
    
    export default FermacelParams