 import React from 'react'
 import ReactDOM from 'react-dom/client'
 
 console.log("React",React);
 console.log("ReactDom",ReactDOM);   

   //  const root = document.getElementById("root")
    const heading1 = React.createElement("h1",{className:"heading1"},"Teli Titans TT");
    console.log("heading1",heading1);

    const heading11 = <h1 className='heading1'>heading11</h1> 
    console.log("heading11",heading11);

    // const Component = () =>{
      // return {
      //   <div> its a function based component   </div>
      // }
    // }
    const Component = () => <div> its a function based component   </div>

    // function component1(){
    //   return {
    //     <div> its a function based component   </div>
    //   }
    // }      
    
    const heading2 = React.createElement("h2",{className:"heading2"},"Active Cricket Club ACC");

    const container1 = React.createElement("div", {className:"container"},[heading1,heading11,heading2]);   
    const root = ReactDOM.createRoot(document.getElementById("root")); 
    root.render(container1);    // converted into html works as render  


    export default function Bio() {
      return (
        <div>
        <div className="intro">
          <h1>Welcome to my website!</h1>
        </div>
        <p className="summary">
          You can find my thoughts here.
          <br/><br/>
          <b>And <i>pictures</i></b> of scientists!
        </p>
            </div>
      );
    }
    
    

 