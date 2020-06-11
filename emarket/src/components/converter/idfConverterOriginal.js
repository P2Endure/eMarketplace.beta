import React, { Component } from 'react';
import './style/style.css'
//import IdfConverter2 from './idfConverterAfter';
const values = ["GAP - MATERIAL GLASS", "GAP - MATERIAL FRAME", "GAP - CONSTRUCION"];

const windowString = `
FenestrationSurface:Detailed, 
  Z01_S01_W01_G1,  ! Name 
  Window,          ! Surface Type 
  H05_Window,      ! Construction Name 
  Z01_S01_W01,     ! Building Surface Name 
  ,                ! Outside Boundary Condition Object 
  0.5,             ! View Factor to Ground 
  ,                ! Name of shading control 
  ,                ! WindowFrameAndDivider Name 
  1,               ! Multiplier`;

export default class IdfConverter extends React.Component{

constructor(props){
    super(props)
    this.state = {
        simulationRun: 1,
    }
    this.testBegin = this.testBegin.bind(this);
 }

 //getFile for new data exchange start

 replaceString = (originalString, searchString, replacementString) => {
   const instanceIndex = originalString.indexOf(searchString);

   if (instanceIndex !== -1) {
     const materialIndex = originalString.indexOf('Multiplier', instanceIndex);
     const rIndex = originalString.indexOf('r', materialIndex);
     return originalString.slice(0, instanceIndex) + replacementString + originalString.slice(rIndex + 1);
  }
  return originalString;
 }
    
getFile  = (e) =>{
    fetch (`http://localhost:4000/upload`, {
        method: "GET"
    }).then(response => {
        return response.text()
    }).then(text => {

        console.log(text)

        let idfArray = text.split(';');

        idfArray.forEach((a, i) => {
           let result = this.replaceString(a, 'FenestrationSurface', windowString);
           idfArray.splice(i, 1, result)
        })

        let newIdf = idfArray.join(';');

        console.log(newIdf);


        // let idf = text.toString().split("\n");
        // var lines_n = idf.length;
        // let block = {};
        // values.forEach(v => { 
        //     block[v] = {};
        // })
        // for (let i = 0; i <= lines_n; i++) {
        //     let line = idf[i];
        //     if (line) {
        //         values.forEach( (v) => {
        //         let isMatch = this.testBegin(line, v);
        //         if (isMatch) {
        //             //console.log("match ", i)
        //             block[v].begin = i;
        //             let counter = i + 1
        //             while (true) {
        //                 let endLine = idf[counter];
        //                 if (this.testEnd(endLine)) {
        //                     block[v].end = counter;
        //                     break;
        //                 }
        //                 counter++
        //                 }   
        //             }
        //         })
        //     }

        // }

        // for (var key in block){
        //     if(block.hasOwnProperty(key)) {
  
        //         let b = block[key]
        //             var toRemoveOriginal = idf.splice(b.begin, 94, b.end - b.begin);
        //             toRemoveOriginal = toRemoveOriginal.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");       
        // }}
        // this.getFile_2();
        //idf.push(toRemoveAfter);
        //idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
        //console.log("IDF ");
        //this.storeFile(idf)
        //console.log(this.storeFile);
    }).catch(err => {
        console.log(err)
    })

};

storeFile (text) {
    fetch ("http://localhost:4000/upload", {
        headers: {
            "Content-Type": "application/json",
        },
          body: JSON.stringify({text: text}),
          method: "POST"
        })
        .then(response => {
            response.json();
        }).then(txt => {
        }).catch(err => {
        })
}

testBegin (text, key) {
    var regex = new RegExp(`(^!).*${key}`);
    if (text.match(regex)) {
        return true;
    } else {

}} 

testEnd(text) {
    var regex = new RegExp(`(^!).*`)
    if (text.match(regex)) {
        return true;
    } else {
        return false;
}} 

getFile_2  = () =>{
    fetch (`http://localhost:4000/upload/add`, {
        method: "GET"
    }).then(response => {
        return response.text()
    }).then(text => {
        let idf = text.toString().split("\n");
        var lines_n = idf.length;
        let block = {};
        values.forEach(v => { 
            block[v] = {};
        })
        for (let i = 0; i <= lines_n; i++) {
            let line = idf[i];
            if (line) {
                values.forEach( (v) => {
                let isMatch = this.testBegin(line, v);
                if (isMatch) {
                    block[v].begin = i;
                    let counter = i + 1
                    while (true) {
                        let endLine = idf[counter];
                        if (this.testEnd(endLine)) {
                            block[v].end = counter;
                            break;
                        }
                        counter++
                        }   
                    }
                })
            }

        }
        let toRemoveAfter = '';
         for (var key in block){
            if(block.hasOwnProperty(key)) {
                let b = block[key]
                    toRemoveAfter = idf.splice(b.begin, 94, b.end - b.begin);
                    toRemoveAfter = toRemoveAfter.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
                    idf.push(toRemoveAfter);
        }
    }
    console.log({toRemoveAfter})
      idf = idf.toString().replace(/(,\r\n|\n|\r\,)/gm,"\n");
        this.storeFile(idf) 
    }).catch(err => {
        console.log('Error: ', err)
    })
};

testBegin_2 (text, key) {
    var regex = new RegExp(`(^!).*${key}`);
    if (text.match(regex)) {
        return true;
    } else {

}} 

testEnd_2(text) {
    var regex = new RegExp(`(^!).*`)
    if (text.match(regex)) {
        return true;
    } else {
        return false;
}} 
//getFile for new data exchange end
 
render(){
    return(  
      <div>
        <div className="wrapper">
            <button className='btn btn-outline-success'  onClick={this.getFile} >Submit</button>
        </div>
    </div> 
    )}
}