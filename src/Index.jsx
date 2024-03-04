import React from "react";
import ReactDOM from "react-dom";

const Heading= <h2>OMG</h2>
const HeadingComponent = () =>{
    return(
        <>
        <h1>Good Morning Bacho3</h1>
        {Heading}
        </>
    )
} 

// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent/>);

 export default HeadingComponent;