import React from "react";
import "./style.css";


const fetchData = () => new Promise((r) => setTimeout(() => r(Date.now()), 100));
 
export default function App(){
 const [result, setResult] = React.useState();
 const data = fetchData().then((value) => setResult(value));
 return (
   <div>
     {result === data.toString() ? (
       <div>hello</div>
     ) : (
       <div>good bye</div>
     )}
   </div>
 );
};
