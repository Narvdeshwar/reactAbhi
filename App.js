/* <div id ="parent">

  <div id ="child"> 
    <h1>I'm  am h1 tag </h1>
    <h2>I'm  am h2 tag </h2>
  </div>
</div>

ReactElement(object) =>HTML(Browser understand)
*/


import React from "react"
import ReactDOM from "react-dom/client"



//jsx -HTML like or XML-like syntax

const jsxheading= <h1>hello</h1>
console.log(jsxheading)

const heading = React.createElement("h1",{id:"heading"},"hello i can understand the react file and why used react and reactdom ")
const root = ReactDOM.createRoot(document.getElementById("root"))

//react component
//class Based Components-old
//function components-New


// React function component




const HeadingComponent = ()=>{
  return <h1 className="heading">react component</h1>
}                                     
           // this both code are same

  
const elem = <span>hello in spane tag</span>
 
      // create components
      
const HeadingComponent3 =() =>(
  
 <h1>hello components 3</h1>
) 

const number = 10000;


const HeadingComponent2 = () =>(
  <div id="container">
    {elem}
    <HeadingComponent3/>
    <HeadingComponent/>
    {number}
    <h1>{number}</h1>

    {1000 +100}  // we can write any javaScript program in curely bracket
      <h1 className="heading2">react component2</h1>
</div>

)
root.render(<HeadingComponent2/> )  //we can render components




//


// root.render(jsxheading)


// const heading2 = React.createElement(
//   "div", { id: "parent" }
//   ,
// [ React.createElement("div", { id: "child" },
//     [React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag")]
//   ),
//  React.createElement("div", { id: "child2" },
//     [React.createElement("h1", {}, "I'm h1 tag"),
//     React.createElement("h2", {}, "I'm h2 tag")]
//   )])


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading2)
