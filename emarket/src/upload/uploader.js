import React, { useState } from 'react';

function Uploader (){
  const [filename, setFilename] = useState(null)
  const uploadFile = (e) => {
    let f = e.target.files[0]
    let newFileName = f.name;
    console.log(e.target)
    let form = new FormData()
    form.append("file", f) 
    fetch ("http://localhost:4000/upload", {
      body: form,
      method: "POST"
        }).then(response => response.json())
          .then(result => {
          console.log("Result:" + result)
          setFilename(newFileName);
        })
        console.log("Uploader Test");
      };
  const startEnergyPlus = (e) =>{
    console.log('start', filename)
    fetch (`http://localhost:4000/express_backend/${filename}`, {
      method: "GET"
    })
  }  
  return(  
    <form>
      <div className="row">
        <div className="col">    
          <input type="file" className="form-control form-control-sm" placeholder=".form-control-sm" id="exampleFormControlFile1" onChange={uploadFile}/> 
          <label htmlFor="exampleFormControlFile1">Example file input</label>
        </div> 
        <div className="col">
          <button className='btn btn-outline-success' onClick={startEnergyPlus} type="button">Start Simulation</button>
        </div>
      </div>  
    </form>
  );
};

export default Uploader;
      


